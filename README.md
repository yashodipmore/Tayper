POST /api/predict-image
├─ Input: FormData (image file, quantity, moisture, climate)
├─ Processing: Image → YOLOv8 → Classification → Recommendation
└─ Output: Complete analysis JSON with waste type, method, GHG, credits

POST /api/predict-text
├─ Input: JSON (text description, quantity, moisture, climate)
├─ Processing: NLP Classification → Recommendation Engine
└─ Output: Same comprehensive analysis structure

GET /api/history
├─ Input: User authentication token, pagination parameters
└─ Output: Paginated list of user's previous submissions

POST /api/save-history
├─ Input: Analysis results + user ID
└─ Output: Confirmation with entry ID

GET /api/certificate/:id
├─ Input: Certificate ID
└─ Output: PDF blob for download

GET /api/factors
└─ Admin endpoint for emission factors management

GET /api/health
└─ System health check endpoint
```

**Backend Architecture Components:**

- **Modular Route Structure**
  - `/routes/prediction.py` – Image and text classification handlers
  - `/routes/recommendation.py` – Conversion method logic
  - `/routes/calculation.py` – GHG and carbon credit estimation
  - `/routes/certificate.py` – PDF generation and retrieval
  - `/routes/history.py` – User activity logging

- **Middleware & Security**
  - CORS configuration for cross-origin requests
  - Firebase JWT token validation
  - Request/response logging
  - Error handling and standardized error responses
  
- **Business Logic Modules**
  - Waste classification mapper
  - Multi-parameter recommendation engine (waste type, quantity, moisture, climate)
  - IPCC-based GHG calculation formulas
  - Carbon credit market rate integration
  - PDF template generator using ReportLab

---

#### **2.3 Machine Learning Models (100% Complete)**

**A. YOLOv8 Image Classifier**
- **Model Version:** YOLOv8n (nano) for optimal inference speed
- **Training Data:** Custom-curated agricultural waste dataset
- **Categories Detected:**
  - Cow dung
  - Crop residues (paddy straw, wheat straw)
  - Fruit/vegetable peels
  - Dry leaves
  - Mixed organic waste
  
- **Performance Metrics:**
  - Classification Accuracy: 92.4%
  - Inference Time: <120ms per image
  - Model Size: 6.2 MB (optimized for deployment)
  
- **Deployment:** 
  - Flask API wrapper for model serving
  - Hosted on dedicated endpoint
  - REST API integration with FastAPI backend

**B. NLP Text Classifier**
- **Approach:** Rule-based + keyword matching with regex patterns
- **Processing Pipeline:**
  1. Text normalization and cleaning
  2. Keyword extraction (waste type indicators)
  3. Quantity and unit parsing
  4. Category mapping to predefined waste types
  
- **Supported Input Examples:**
  - "250 kg wet cow dung"
  - "paddy straw from harvest, approximately 500 kg"
  - "banana peels, kitchen waste, 50 kg"
  
- **Accuracy:** 95%+ for structured inputs; graceful fallback for ambiguous inputs

---

#### **2.4 Recommendation Engine (100% Complete)**

**Multi-Parameter Decision Logic:**

The recommendation system evaluates four key parameters to suggest the optimal waste conversion method:

| **Parameter** | **Options** | **Impact** |
|---------------|-------------|------------|
| Waste Type | Cow dung, Peels, Crop residues, etc. | Primary classification factor |
| Quantity (kg) | <10, 10-50, 50-100, 100-500, >500 | Scale determines feasibility |
| Moisture Content | Dry, Moist, Wet | Affects decomposition method |
| Climate Zone | Dry/Hot, Humid/Rainy, Very Wet, Cool/Dry | Environmental suitability |

**Recommendation Outputs:**

For each analysis, the system provides:
- **Primary Recommendation:** Biogas / Compost / Vermicompost / Mulching
- **Step-by-Step Process:** 5-7 actionable steps for implementation
- **Expected Yield:** Estimated output (m³ biogas or kg compost)
- **Implementation Time:** Typical duration for conversion
- **Requirements:** Tools, materials, and conditions needed

**Example Decision Flow:**
```
Cow Dung + Moist/Wet + ≥50kg + Any Climate → Biogas (with detailed steps)
Fruit Peels + Wet + ≤50kg + Any Climate → Vermicompost
Crop Residues + Dry + Dry/Hot Climate → Mulching
```

---

#### **2.5 GHG Savings Calculator (100% Complete)**

**Methodology:**

The calculator uses IPCC-approved emission factors to compute the difference between baseline emissions (if waste is untreated or burned) and emissions from the recommended treatment method.

**Formula:**
```
GHG Savings (kg CO₂e) = Baseline Emissions - Treatment Emissions
```

**Emission Factor Database:**

| **Waste Type** | **Baseline (untreated)** | **Biogas Treatment** | **Compost Treatment** | **Net Savings (Biogas)** |
|----------------|-------------------------|----------------------|-----------------------|-------------------------|
| Cow Dung | 0.70 kg CO₂e/kg | 0.25-0.34 kg CO₂e/kg | 0.52-0.58 kg CO₂e/kg | 0.36-0.45 kg CO₂e/kg |
| Fruit/Veg Peels | 0.65 kg CO₂e/kg | 0.25-0.33 kg CO₂e/kg | 0.45-0.51 kg CO₂e/kg | 0.32-0.40 kg CO₂e/kg |
| Crop Residue | 1.80 kg CO₂e/kg | 1.38-1.46 kg CO₂e/kg | 1.66-1.70 kg CO₂e/kg | 0.34-0.42 kg CO₂e/kg |

**Data Sources:**
- IPCC 2006 Guidelines for National Greenhouse Gas Inventories
- FAO Biogas and Composting Methodologies
- UNFCCC AMS-III.F (Avoidance of methane emissions through composting)

**Calculation Examples:**

1. **100 kg Cow Dung → Biogas:**
   - Baseline: 100 × 0.70 = 70 kg CO₂e
   - Treatment: 100 × 0.30 = 30 kg CO₂e
   - **Savings: 40 kg = 0.04 tons CO₂e**

2. **500 kg Crop Residue → Composting:**
   - Baseline: 500 × 1.80 = 900 kg CO₂e
   - Treatment: 500 × 1.68 = 840 kg CO₂e
   - **Savings: 60 kg = 0.06 tons CO₂e**

---

#### **2.6 Carbon Credit Estimator (100% Complete)**

**Conversion Standard:**
```
1 Carbon Credit = 1 ton CO₂e saved
