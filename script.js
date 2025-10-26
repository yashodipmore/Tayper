// Sample texts for typing test - Extended and longer paragraphs
const sampleTexts = [
    "The quick brown fox jumps over the lazy dog while contemplating the meaning of life and the universe in this vast cosmic expanse. Throughout history, humanity has sought to understand the fundamental nature of reality and our place within it. Ancient philosophers pondered these questions under starlit skies, while modern scientists peer into the depths of space and time using powerful telescopes and sophisticated instruments. Each generation builds upon the knowledge of those who came before, creating an ever-expanding tapestry of human understanding. The pursuit of wisdom requires patience, dedication, and an insatiable curiosity about the world around us. We must remain open to new ideas and willing to challenge our assumptions, for it is only through this process of continuous learning and growth that we can hope to unlock the mysteries that surround us. In every moment, opportunities arise to expand our consciousness and deepen our appreciation for the intricate beauty of existence.",
    
    "Programming is not just about writing code, it is about solving complex problems and creating elegant solutions that make a real difference in people's lives across the globe. Software developers work tirelessly to build applications that connect humanity, streamline business processes, and push the boundaries of what technology can achieve. From mobile applications that fit in your pocket to massive distributed systems that power the internet, every line of code serves a purpose and contributes to the digital ecosystem. The best programmers understand that their craft requires both technical expertise and creative thinking, combining logical precision with innovative problem-solving approaches. They must stay current with rapidly evolving technologies while also mastering timeless principles of software design and architecture. Debugging becomes an art form, testing ensures reliability, and documentation preserves knowledge for future generations of developers. Collaboration thrives in this field, as teams work together to transform abstract ideas into tangible products that users can touch, see, and experience in their daily lives.",
    
    "In the digital age, typing speed has become an essential skill for productivity and efficient communication across all professional domains and personal endeavors. Whether composing emails, writing reports, creating content, or engaging in online conversations, the ability to translate thoughts into text quickly and accurately provides a significant competitive advantage. Students benefit from faster note-taking during lectures, professionals complete their work more efficiently, and writers can capture fleeting ideas before they disappear into the ether. The keyboard has become an extension of our minds, allowing us to express complex thoughts and emotions with remarkable speed and precision. Touch typing eliminates the need to look at keys, freeing our eyes to focus on the screen and our thoughts to flow uninterrupted. Regular practice builds muscle memory, transforming conscious effort into automatic motion that requires minimal mental resources. As we become more proficient, typing transitions from a mechanical task into a natural form of expression, much like speaking or writing by hand once were for previous generations.",
    
    "Practice makes perfect, and with dedication and persistent effort, anyone can improve their typing skills significantly over time through consistent training and deliberate focus. The journey from hunt-and-peck typing to fluid touch typing requires patience and commitment, but the rewards are well worth the investment. Start by learning proper finger placement on the home row keys, ensuring that each finger rests in its designated position. Then gradually expand your reach to include all keys, maintaining correct posture and hand position throughout your practice sessions. Regular drills help reinforce muscle memory, while typing games make the learning process more engaging and enjoyable. Track your progress by measuring both speed and accuracy, remembering that precision should never be sacrificed for raw velocity. Over weeks and months, you will notice steady improvement as your fingers learn to move automatically to the correct keys. Celebrate small victories along the way, whether it is reaching a new words-per-minute milestone or typing an entire sentence without errors. The skills you develop will serve you well throughout your academic and professional career.",
    
    "Technology evolves at a rapid pace, and staying updated with the latest trends and innovations is crucial for success in the modern world of constant change and digital transformation. Every year brings new programming languages, frameworks, and tools that promise to revolutionize how we build software and solve problems. Artificial intelligence and machine learning have opened up unprecedented possibilities for automation and intelligent decision-making across countless industries. Cloud computing has democratized access to powerful infrastructure, allowing startups to compete with established enterprises on a more level playing field. Mobile technology continues to reshape how we interact with information and each other, while the Internet of Things connects everyday objects to the digital realm. Virtual and augmented reality technologies are creating immersive experiences that blur the lines between physical and digital worlds. Blockchain and distributed ledger technologies are reimagining trust and transparency in financial systems and beyond. Meanwhile, quantum computing looms on the horizon, promising to tackle computational problems that are currently beyond reach. Professionals must commit to lifelong learning, constantly updating their skills and knowledge to remain relevant in this dynamic landscape.",
    
    "The art of typing efficiently combines accuracy with speed, creating a harmonious balance that leads to true mastery of the keyboard and exceptional productivity gains. Champions of typing competitions demonstrate incredible feats of speed, sometimes exceeding two hundred words per minute while maintaining near-perfect accuracy. They achieve this through years of dedicated practice, proper technique, and an almost meditative focus during their performances. But you do not need to become a competitive typist to benefit from improved typing skills. Even moderate improvements in your typing ability can save countless hours over the course of a year. Consider how much time you spend at a keyboard each day, whether for work, study, or personal communication. Now imagine completing those same tasks ten or twenty percent faster, with fewer errors requiring correction. The time savings accumulate rapidly, giving you more opportunities to focus on creative and strategic thinking rather than mechanical execution. Efficient typing also reduces physical strain on your hands and wrists, potentially preventing repetitive stress injuries that plague many knowledge workers. By investing time now to develop proper typing habits, you are making a smart investment in your future productivity and well-being.",
    
    "Learning to type without looking at the keyboard is a valuable skill that pays dividends throughout your entire career and daily life in countless ways both obvious and subtle. Touch typing transforms the keyboard from a tool you must consciously operate into a transparent interface between your thoughts and the digital world. Your eyes remain fixed on the screen, allowing you to catch errors immediately and maintain your train of thought without interruption. This seamless connection between mind and machine enables a state of flow where ideas translate directly into text without the friction of hunting for keys. The cognitive load decreases dramatically, freeing mental resources for higher-level thinking about content, structure, and meaning rather than mechanics. Professional writers often speak of entering a zen-like state where words pour forth effortlessly, their fingers dancing across keys in perfect synchronization with their creative process. Programmers benefit similarly, able to focus on algorithms and logic rather than the physical act of typing code. Even in casual settings, touch typing enhances your ability to participate fully in online conversations and express yourself clearly and quickly. The skill becomes second nature, much like riding a bicycle, and once learned is never forgotten.",
    
    "Every keystroke counts when you are racing against time to complete important tasks and meet challenging deadlines in a fast-paced environment that demands efficiency. In professional settings, the ability to produce high-quality written work quickly can be the difference between success and mediocrity. Journalists file stories under tight deadlines, requiring them to type rapidly while maintaining accuracy and clarity. Customer service representatives handle multiple inquiries simultaneously, with response speed directly impacting customer satisfaction and business outcomes. Transcriptionists convert spoken words into text in real-time, demanding exceptional typing speed and precision. Court reporters capture every word spoken during legal proceedings, where accuracy is not just important but legally required. Students taking timed exams benefit from being able to express their knowledge fully within the allotted time period. Remote workers communicate primarily through written channels, making typing proficiency essential for effective collaboration. The modern workplace increasingly values those who can process information and produce outputs rapidly without sacrificing quality. By honing your typing skills, you develop a foundational competency that supports excellence across virtually every knowledge-based profession and academic discipline.",

    "Communication in the twenty-first century relies heavily on written digital correspondence, making typing proficiency more important than ever before in human history. Email has become the primary mode of business communication, with professionals sending and receiving dozens or even hundreds of messages daily. Social media platforms allow us to share our thoughts and connect with others across the globe in real-time. Instant messaging applications enable quick exchanges that replace phone calls and face-to-face conversations. Online forums and discussion boards facilitate knowledge sharing among communities of practice. Video conferences often include chat features where participants type questions and comments alongside verbal discussions. Documentation of projects, meetings, and decisions increasingly happens in digital formats that require extensive typing. The ability to communicate effectively through text has become a fundamental literacy skill, equivalent in importance to reading and writing by hand. Those who can type quickly and accurately find themselves better able to participate fully in digital conversations, contribute to collaborative projects, and maintain strong professional relationships. The keyboard has truly become the pen of the modern age, and mastery of typing is essential for anyone seeking to thrive in contemporary society.",

    "Ergonomics and proper typing technique go hand in hand to ensure long-term health and sustained productivity throughout your career. Poor posture and incorrect finger positioning can lead to repetitive strain injuries such as carpal tunnel syndrome, tendonitis, and chronic back pain that may require medical intervention. Sit with your feet flat on the floor, back straight against your chair, and shoulders relaxed to maintain proper spinal alignment. Position your monitor at eye level to avoid neck strain, and ensure your keyboard is at a height that allows your forearms to rest parallel to the floor. Keep your wrists straight and floating above the keyboard rather than resting on the desk surface. Use a light touch when striking keys, avoiding the unnecessary force that can stress your fingers and hands. Take regular breaks every hour to stretch your muscles, rest your eyes, and prevent the buildup of tension. Consider using ergonomic keyboards and input devices designed to reduce strain on your hands and wrists. By developing good habits early and maintaining awareness of your body positioning, you protect yourself from injuries that could impair your ability to work effectively. Your future self will thank you for the care you take today in preserving your physical health while developing your typing skills.",

    "The psychology of learning reveals fascinating insights into how we can most effectively develop new skills like typing through deliberate practice and strategic approaches. Neuroplasticity allows our brains to form new neural pathways as we repeat movements and actions, gradually making them more automatic and requiring less conscious effort. The process of skill acquisition follows predictable stages, beginning with conscious incompetence where we struggle with basic tasks, progressing through conscious competence as we slowly improve, and eventually reaching unconscious competence where actions become automatic. Distributed practice with spacing between sessions proves more effective than marathon cramming sessions, as it allows time for memory consolidation during sleep. Setting specific, measurable goals provides motivation and direction for your practice efforts, while tracking progress helps maintain engagement over the long term. Variety in practice activities prevents boredom and helps generalize skills across different contexts. Immediate feedback on errors enables rapid correction and prevents the reinforcement of bad habits. Visualization techniques can supplement physical practice by activating similar neural pathways through mental rehearsal. Understanding these principles of learning science empowers you to design more effective practice routines that accelerate your journey toward typing mastery while making the process more enjoyable and sustainable.",

    "History shows us that methods of recording and transmitting information have always shaped human civilization in profound and far-reaching ways. The invention of writing systems allowed knowledge to be preserved across generations, enabling the accumulation of culture and learning. The printing press democratized access to books and literacy, fueling the Renaissance and Enlightenment periods of human achievement. Typewriters transformed business communication and made careers in writing more accessible to broader segments of society. The telegraph and telephone enabled near-instantaneous communication across vast distances for the first time. Computers and the internet have created unprecedented opportunities for information sharing and global collaboration. Each technological advancement in communication has required humans to develop new skills and adapt to changing paradigms. Today, the keyboard represents our primary interface with digital technology, and typing proficiency has become as fundamental as reading and writing. Future generations may interact with computers through voice commands, neural interfaces, or technologies we cannot yet imagine. But for now and the foreseeable future, the keyboard remains central to how we work, learn, and communicate. Understanding this historical context helps us appreciate the importance of typing skills while remaining open to future innovations that may transform how we interact with information technology.",

    "Creativity and typing speed might seem unrelated at first glance, but the connection between them runs deeper than many people realize in their daily work. When you can type as quickly as you think, your creative process becomes more fluid and spontaneous, allowing ideas to flow from mind to screen without bottlenecks. Writers report that fast typing helps them enter flow states where prose emerges almost effortlessly, unimpeded by the mechanical constraints of slow hunt-and-peck methods. Brainstorming sessions become more productive when participants can capture ideas rapidly before they fade from working memory. The ability to transcribe thoughts quickly reduces the cognitive load of composition, freeing mental resources for higher-level concerns like structure, style, and argumentation. In collaborative environments, those who can type rapidly contribute more effectively to shared documents and real-time discussions. The confidence that comes from typing proficiency can also reduce writer's block and anxiety about starting new projects. Some creative professionals even report that the rhythmic sound and feel of typing on a keyboard becomes part of their creative process, similar to how musicians develop relationships with their instruments. By removing friction from the act of recording your thoughts, improved typing skills can actually enhance your creative output and make the entire process more enjoyable and productive.",

    "Cultural differences in keyboard layouts and typing conventions reflect the diversity of human languages and writing systems around the world. The QWERTY layout, ubiquitous in English-speaking countries, was originally designed to prevent mechanical typewriter jams by separating frequently-used letter pairs. Alternative layouts like Dvorak and Colemak claim to increase efficiency and reduce finger movement, though they have not achieved widespread adoption. Non-Latin alphabets require entirely different keyboard configurations, with languages like Arabic, Russian, Chinese, and Japanese each having unique input methods. Some writing systems like Chinese use phonetic input methods that convert romanized spellings into characters, requiring users to select from multiple homophone options. Right-to-left languages present additional challenges for software localization and text editing. Programming languages and command-line interfaces typically assume English conventions, creating barriers for developers whose native languages use different character sets. International teams must navigate these differences when collaborating on shared documents and code repositories. Emoji and special characters add another layer of complexity to modern digital communication, with platform-specific implementations creating inconsistencies. Understanding these cultural and technical variations in typing practices helps us appreciate the challenges of creating truly global software systems and reminds us that our own experiences represent just one of many possible approaches to human-computer interaction.",

    "Education systems worldwide are grappling with how to best teach typing skills to students growing up in an increasingly digital environment. Some argue that traditional touch-typing instruction should be mandatory from early grades, ensuring all students develop this fundamental literacy. Others contend that children naturally become proficient through regular use of digital devices and that formal instruction is unnecessary. Research suggests a middle ground may be optimal, with structured lessons providing foundational technique while allowing ample practice time for skill development. Gamification of typing instruction through engaging software can motivate students who might otherwise find drills tedious. Integration of typing practice into other subjects, such as having students compose essays or lab reports digitally, provides authentic contexts for skill application. The rise of tablets and smartphones with touchscreen keyboards has introduced new considerations, as swipe-typing and auto-correction change the nature of text input. Schools must balance teaching traditional keyboard skills with preparing students for evolving input methods. Assessment of typing proficiency remains controversial, with debates about whether speed tests truly measure the skills most relevant to real-world tasks. Teachers also need training and support to effectively integrate typing instruction into their curricula. As education continues to evolve in response to technological change, the role of typing instruction will likely remain a topic of ongoing discussion and experimentation.",

    "The future of human-computer interaction promises exciting developments that may eventually supersede keyboard typing as we know it today. Voice recognition technology has made remarkable strides, enabling hands-free dictation that approaches or exceeds typing speeds for many users. Brain-computer interfaces under development could allow direct thought-to-text communication, though significant technical and ethical challenges remain. Gesture recognition and haptic feedback systems offer alternative input modalities for specific applications. Augmented reality environments may replace physical keyboards with virtual ones or entirely new interaction paradigms. Artificial intelligence assistants can complete sentences, suggest responses, and even generate entire documents based on brief prompts. Eye-tracking technology enables text input through gaze direction, particularly valuable for users with physical disabilities. However, despite these advances, the traditional keyboard persists as a reliable, fast, and universally understood input method. The transition to new technologies will likely be gradual rather than sudden, with keyboards coexisting alongside newer interfaces for many years. Learning to type remains a valuable investment because the skills transfer partially to other input methods and because keyboards will not disappear overnight. Moreover, understanding the principles of efficient text input—such as the importance of accuracy, the value of practice, and the role of muscle memory—applies regardless of the specific technology we use. Whatever the future holds, the ability to effectively translate thoughts into digital text will remain crucial for personal and professional success.",

    "Competitive typing represents a niche but passionate community of individuals who push the boundaries of human performance in this specialized skill. International competitions attract participants who can sustain speeds exceeding one hundred fifty words per minute with extraordinary accuracy. These typists train extensively, practicing for hours daily to maintain and improve their capabilities. Specialized mechanical keyboards with custom switches and keycaps provide tactile feedback and responsiveness preferred by serious competitors. Online leaderboards and typing test websites enable enthusiasts to compare their performance with others worldwide and track personal improvement over time. The psychology of competition drives participants to overcome plateaus and continue pushing their limits even after achieving impressive speeds. Different competition formats test various aspects of typing proficiency, from raw speed on common word lists to accuracy on complex technical passages. Some competitors specialize in specific challenges, such as typing numbers and symbols or handling unusual vocabulary. The community aspect of competitive typing provides motivation, support, and camaraderie among people who share this uncommon interest. While most people will never pursue typing as a competitive sport, the dedication and techniques employed by elite typists offer valuable lessons for anyone seeking to improve their own skills. Understanding what is possible at the highest levels can inspire us to raise our own standards and realize that significant improvement is achievable with proper practice and commitment.",

    "Accessibility considerations in typing and text input are essential for ensuring digital inclusion of people with diverse abilities and needs. Individuals with visual impairments may use screen readers that speak text aloud while they type, or refreshable braille displays that provide tactile output. One-handed typing techniques and specialized keyboard layouts accommodate people who have lost use of a limb or have conditions affecting motor control. Sticky keys and filter keys settings help those who struggle with pressing multiple keys simultaneously or avoiding accidental keystrokes. Voice recognition software enables hands-free text input for people unable to use traditional keyboards effectively. Alternative pointing devices like trackballs, head-tracking systems, and switch interfaces provide options for users with limited hand function. Keyboard overlays and large-print labels assist users with low vision or cognitive disabilities. Adjustable keyboard height and angle accommodate wheelchair users and others with positioning requirements. Software adaptations such as word prediction and auto-completion reduce the number of keystrokes needed, benefiting users with fatigue issues or repetitive strain injuries. Universal design principles encourage creating systems usable by the widest possible range of people without requiring specialized adaptations. As our society becomes more reliant on digital communication, ensuring that everyone can participate regardless of physical abilities becomes increasingly important. Inclusive design not only helps people with disabilities but often produces solutions that benefit all users through increased flexibility and ease of use.",

    "The relationship between typing and cognitive processes reveals interesting connections between physical actions and mental functions in fascinating ways. Embodied cognition research suggests that the physical act of typing may influence how we think and remember information differently than handwriting does. Studies show that taking notes by hand often leads to better retention than typing them, possibly because handwriting requires more processing and synthesis. However, the speed advantage of typing enables capturing more complete records of lectures and discussions. The motor memory developed through typing practice can actually assist with spelling recall, as fingers remember the patterns of common words. Some evidence suggests that the medium of composition affects writing style, with typed text tending toward different structures than handwritten prose. The ability to easily edit typed text changes the revision process compared to handwritten drafts. Multi-tasking while typing, such as listening to speech and transcribing simultaneously, requires significant cognitive resources and develops with practice. The click of keys and haptic feedback provide sensory cues that become integrated into our mental models of typing. Individual differences in working memory capacity may affect how easily someone learns to type quickly. Understanding these cognitive dimensions of typing helps us appreciate the complexity of what might seem like a simple mechanical skill and informs how we approach teaching and learning typing effectively.",

    "Environmental and sustainability considerations are becoming increasingly relevant to how we think about keyboards, typing technology, and digital infrastructure. Electronic waste from discarded keyboards and computers represents a growing environmental challenge requiring better recycling and disposal systems. Mechanical keyboards prized by enthusiasts can last decades with proper maintenance, contrasting with cheaper membrane keyboards that may need frequent replacement. Energy consumption of computing devices, though individually small, adds up to significant environmental impact at global scale. Manufacturing processes for electronic components involve resource extraction, chemical use, and carbon emissions that contribute to environmental degradation. The shift toward cloud computing and remote work enabled by digital communication has both positive and negative environmental implications. Reduced commuting and office space needs can decrease overall carbon footprints, while increased data center energy demands create new challenges. Planned obsolescence in consumer electronics encourages frequent upgrades rather than long-term device use. Open-source hardware initiatives aim to create more repairable and sustainable computing devices. As awareness of climate change and environmental limits grows, the technology industry faces pressure to develop more sustainable practices. Individual choices about device purchases, maintenance, and disposal can collectively make a difference. Typing skills themselves are environmentally neutral, but the broader context of digital technology use raises important questions about sustainability that will shape future development of computers and communication systems."
];

// Game state
let words = [];
let currentWordIndex = 0;
let currentLetterIndex = 0;
let startTime = null;
let timerInterval = null;
let timeLeft = 60;
let isTestRunning = false;
let correctChars = 0;
let incorrectChars = 0;
let totalTypedChars = 0;
let userInput = '';

// DOM elements
const textDisplay = document.getElementById('textDisplay');
const wordsContainer = document.getElementById('wordsContainer');
const timerElement = document.getElementById('timer');
const wpmElement = document.getElementById('wpm');
const cpmElement = document.getElementById('cpm');
const accuracyElement = document.getElementById('accuracy');
const restartBtn = document.getElementById('restartBtn');
const resultModal = document.getElementById('resultModal');
const tryAgainBtn = document.getElementById('tryAgainBtn');
const timerDisplay = document.querySelector('.timer-display');
const instructionElement = document.querySelector('.instruction');

// Initialize
init();

function init() {
    selectRandomText();
    renderText();
    
    // Event listeners
    textDisplay.addEventListener('click', focusTyping);
    textDisplay.addEventListener('focus', focusTyping);
    document.addEventListener('keydown', handleKeyPress);
    restartBtn.addEventListener('click', resetTest);
    tryAgainBtn.addEventListener('click', () => {
        resultModal.classList.remove('active');
        resetTest();
    });
}

function selectRandomText() {
    const text = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
    words = text.split(' ');
}

function renderText() {
    wordsContainer.innerHTML = '';
    
    words.forEach((word, wordIndex) => {
        const wordElement = document.createElement('span');
        wordElement.className = 'word';
        wordElement.setAttribute('data-word-index', wordIndex);
        
        word.split('').forEach((letter, letterIndex) => {
            const letterElement = document.createElement('span');
            letterElement.className = 'letter';
            letterElement.textContent = letter;
            letterElement.setAttribute('data-letter-index', letterIndex);
            wordElement.appendChild(letterElement);
        });
        
        wordsContainer.appendChild(wordElement);
        
        // Add space after word (except last word)
        if (wordIndex < words.length - 1) {
            const space = document.createElement('span');
            space.className = 'letter space';
            space.textContent = ' ';
            space.setAttribute('data-space', 'true');
            wordsContainer.appendChild(space);
        }
    });
    
    // Highlight first letter
    highlightCurrentLetter();
}

function focusTyping() {
    textDisplay.focus();
    if (!isTestRunning) {
        startTest();
    }
}

function startTest() {
    if (isTestRunning) return;
    
    isTestRunning = true;
    startTime = Date.now();
    timeLeft = 60;
    
    timerDisplay.classList.add('running');
    timerInterval = setInterval(updateTimer, 1000);
    
    instructionElement.classList.add('hidden');
}

function updateTimer() {
    timeLeft--;
    timerElement.textContent = timeLeft;
    
    if (timeLeft <= 0) {
        endTest();
    }
    
    updateStats();
}

function handleKeyPress(e) {
    if (!isTestRunning) return;
    if (resultModal.classList.contains('active')) return;
    
    // Prevent default for special keys
    if (e.key === 'Backspace' || e.key === ' ' || e.key.length === 1) {
        e.preventDefault();
    }
    
    const allLetters = wordsContainer.querySelectorAll('.letter');
    const currentIndex = currentWordIndex * 2 + currentLetterIndex; // Account for spaces
    
    if (e.key === 'Backspace') {
        handleBackspace();
    } else if (e.key === ' ') {
        handleSpace();
    } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        handleCharacter(e.key);
    }
    
    updateStats();
}

function handleCharacter(char) {
    const wordElements = wordsContainer.querySelectorAll('.word');
    if (currentWordIndex >= wordElements.length) return;
    
    const currentWord = wordElements[currentWordIndex];
    const letters = currentWord.querySelectorAll('.letter:not(.extra)');
    
    if (currentLetterIndex < letters.length) {
        const currentLetter = letters[currentLetterIndex];
        const expectedChar = currentLetter.textContent;
        
        if (char === expectedChar) {
            currentLetter.classList.add('correct');
            correctChars++;
        } else {
            currentLetter.classList.add('incorrect');
            incorrectChars++;
        }
        
        totalTypedChars++;
        currentLetterIndex++;
    } else {
        // Extra characters beyond the word
        const extraLetter = document.createElement('span');
        extraLetter.className = 'letter extra';
        extraLetter.textContent = char;
        currentWord.appendChild(extraLetter);
        incorrectChars++;
        totalTypedChars++;
        currentLetterIndex++;
    }
    
    highlightCurrentLetter();
    fadeTypedWords();
    updateTextPosition();
}

function highlightCurrentLetter() {
    // Remove all current-letter highlights
    document.querySelectorAll('.current-letter').forEach(el => {
        el.classList.remove('current-letter');
    });
    
    const wordElements = wordsContainer.querySelectorAll('.word');
    if (currentWordIndex >= wordElements.length) return;
    
    const currentWord = wordElements[currentWordIndex];
    const letters = currentWord.querySelectorAll('.letter');
    
    if (currentLetterIndex < letters.length) {
        letters[currentLetterIndex].classList.add('current-letter');
    }
}

function updateTextPosition() {
    const wordElements = wordsContainer.querySelectorAll('.word');
    if (currentWordIndex >= wordElements.length) return;
    
    // Calculate total width of completed words (keep only recent words visible)
    let offset = 0;
    const startIndex = Math.max(0, currentWordIndex - 1); // Keep 1 previous word visible
    
    for (let i = 0; i < startIndex; i++) {
        if (wordElements[i]) {
            offset += wordElements[i].offsetWidth;
            // Add the margin-right (0.7em converted to pixels)
            const fontSize = parseFloat(getComputedStyle(textDisplay).fontSize);
            offset += fontSize * 0.7;
        }
    }
    
    // Smoothly move text to keep current word comfortably positioned
    wordsContainer.style.transform = `translateX(-${offset}px)`;
}

function scrollTextHorizontally() {
    // This function is now replaced by updateTextPosition
    updateTextPosition();
}

function fadeTypedWords() {
    const wordElements = wordsContainer.querySelectorAll('.word');
    
    wordElements.forEach((word, index) => {
        word.classList.remove('typed', 'past');
        
        if (index < currentWordIndex - 2) {
            // Words far behind become invisible
            word.classList.add('past');
        } else if (index < currentWordIndex) {
            // Recently typed words fade slightly
            word.classList.add('typed');
        }
    });
}

function handleSpace() {
    const wordElements = wordsContainer.querySelectorAll('.word');
    if (currentWordIndex >= wordElements.length) return;
    
    const currentWord = wordElements[currentWordIndex];
    const letters = currentWord.querySelectorAll('.letter:not(.extra)');
    
    // Mark any untyped letters as incorrect
    for (let i = currentLetterIndex; i < letters.length; i++) {
        if (!letters[i].classList.contains('correct') && !letters[i].classList.contains('incorrect')) {
            letters[i].classList.add('incorrect');
            incorrectChars++;
        }
    }
    
    // Move to next word
    currentWordIndex++;
    currentLetterIndex = 0;
    totalTypedChars++;
    
    highlightCurrentLetter();
    fadeTypedWords();
    updateTextPosition();
    
    // Check if test is complete
    if (currentWordIndex >= words.length) {
        endTest();
    }
}

function handleBackspace() {
    if (currentLetterIndex > 0) {
        // Remove character from current word
        currentLetterIndex--;
        const wordElements = wordsContainer.querySelectorAll('.word');
        const currentWord = wordElements[currentWordIndex];
        const letters = currentWord.querySelectorAll('.letter:not(.extra)');
        const extraLetters = currentWord.querySelectorAll('.letter.extra');
        
        // Check if we're removing an extra letter
        if (extraLetters.length > 0 && currentLetterIndex >= letters.length) {
            extraLetters[extraLetters.length - 1].remove();
            incorrectChars--;
            totalTypedChars = Math.max(0, totalTypedChars - 1);
        } else if (currentLetterIndex < letters.length) {
            const letter = letters[currentLetterIndex];
            
            // Update counters before removing classes
            if (letter.classList.contains('correct')) {
                correctChars--;
            } else if (letter.classList.contains('incorrect')) {
                incorrectChars--;
            }
            
            letter.classList.remove('correct', 'incorrect');
            totalTypedChars = Math.max(0, totalTypedChars - 1);
        }
    } else if (currentWordIndex > 0) {
        // Move to previous word
        currentWordIndex--;
        const wordElements = wordsContainer.querySelectorAll('.word');
        const prevWord = wordElements[currentWordIndex];
        const letters = prevWord.querySelectorAll('.letter:not(.extra)');
        const extraLetters = prevWord.querySelectorAll('.letter.extra');
        currentLetterIndex = letters.length + extraLetters.length;
        
        totalTypedChars = Math.max(0, totalTypedChars - 1);
        updateTextPosition();
    }
    
    highlightCurrentLetter();
    fadeTypedWords();
}

function updateStats() {
    if (!startTime) return;
    
    const elapsedMinutes = (60 - timeLeft) / 60;
    
    // Calculate WPM (assuming average word length of 5 characters)
    const wpm = elapsedMinutes > 0 ? Math.round((correctChars / 5) / elapsedMinutes) : 0;
    wpmElement.textContent = Math.max(0, wpm);
    
    // Calculate CPM
    const cpm = elapsedMinutes > 0 ? Math.round(correctChars / elapsedMinutes) : 0;
    cpmElement.textContent = Math.max(0, cpm);
    
    // Calculate accuracy
    const accuracy = totalTypedChars > 0 ? Math.round((correctChars / totalTypedChars) * 100) : 100;
    accuracyElement.textContent = accuracy;
}

function endTest() {
    isTestRunning = false;
    clearInterval(timerInterval);
    
    timerDisplay.classList.remove('running');
    
    // Calculate final stats
    const elapsedMinutes = (60 - timeLeft) / 60;
    const finalWpm = elapsedMinutes > 0 ? Math.round((correctChars / 5) / elapsedMinutes) : 0;
    const finalCpm = elapsedMinutes > 0 ? Math.round(correctChars / elapsedMinutes) : 0;
    const finalAccuracy = totalTypedChars > 0 ? Math.round((correctChars / totalTypedChars) * 100) : 100;
    
    // Show results modal
    document.getElementById('finalWpm').textContent = Math.max(0, finalWpm);
    document.getElementById('finalCpm').textContent = Math.max(0, finalCpm);
    document.getElementById('finalAccuracy').textContent = finalAccuracy + '%';
    document.getElementById('finalErrors').textContent = incorrectChars;
    
    resultModal.classList.add('active');
}

function resetTest() {
    // Clear any running intervals
    clearInterval(timerInterval);
    
    // Reset all state
    isTestRunning = false;
    startTime = null;
    timeLeft = 60;
    currentWordIndex = 0;
    currentLetterIndex = 0;
    correctChars = 0;
    incorrectChars = 0;
    totalTypedChars = 0;
    userInput = '';
    
    // Reset UI
    timerElement.textContent = '60';
    wpmElement.textContent = '0';
    cpmElement.textContent = '0';
    accuracyElement.textContent = '0';
    
    timerDisplay.classList.remove('running');
    instructionElement.classList.remove('hidden');
    
    // Reset text position
    wordsContainer.style.transform = 'translateX(0)';
    
    // Select new text and display
    selectRandomText();
    renderText();
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + R to restart
    if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
        e.preventDefault();
        resetTest();
    }
    
    // Escape to close modal or reset
    if (e.key === 'Escape') {
        if (resultModal.classList.contains('active')) {
            resultModal.classList.remove('active');
        } else {
            resetTest();
        }
    }
});

// Update cursor position on window resize
// window.addEventListener('resize', updateCursorPosition);

// Prevent context menu on text display
textDisplay.addEventListener('contextmenu', (e) => e.preventDefault());

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';
