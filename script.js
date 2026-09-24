// ============================================================
// PLANNER PROMPT STUDIO
// Planner Intelligence Engine
// ============================================================


// ============================================================
// DROPDOWN OPTIONS
// ============================================================

const options = {

    productFormat: [
        "Single-Page Printable",
        "Multi-Page Planner",
        "Printable Planner Bundle",
        "Daily Planner Sheet",
        "Weekly Planner Spread",
        "Monthly Planner Spread",
        "Yearly Planner",
        "Planner Dashboard",
        "Printable Journal Page",
        "Guided Journal",
        "Tracker Sheet",
        "Checklist Printable",
        "Worksheet",
        "Workbook",
        "Planner Insert",
        "Planner Template",
        "Habit Tracker Bundle",
        "Digital Planner Page",
        "Printable Wall Planner",
        "Undated Planner",
        "Custom"
    ],

    pageSize: [
        "A4 Portrait",
        "A4 Landscape",
        "A5 Portrait",
        "A5 Landscape",
        "A6 Portrait",
        "A6 Landscape",
        "US Letter Portrait",
        "US Letter Landscape",
        "US Half Letter Portrait",
        "US Half Letter Landscape",
        "Happy Planner Classic",
        "Happy Planner Mini",
        "Personal Planner",
        "5 × 7 inches",
        "8 × 10 inches",
        "8 × 8 inches Square",
        "12 × 12 inches Square",
        "Custom"
    ],

    plannerType: [
        "Daily Planner",
        "Weekly Planner",
        "Monthly Planner",
        "Yearly Planner",
        "Sunday Reset Planner",
        "Morning Routine Planner",
        "Evening Routine Planner",
        "Daily Schedule Planner",
        "Time-Blocking Planner",
        "Productivity Planner",
        "Goal-Setting Planner",
        "Habit Tracker",
        "Wellness Planner",
        "Self-Care Planner",
        "Fitness Planner",
        "Meal Planner",
        "Budget Planner",
        "Finance Planner",
        "Cleaning Planner",
        "Home Management Planner",
        "Study Planner",
        "Student Planner",
        "Work Planner",
        "Business Planner",
        "Content Planner",
        "Social Media Planner",
        "Project Planner",
        "Wedding Planner",
        "Travel Planner",
        "Reading Planner",
        "Gratitude Journal",
        "Reflection Journal",
        "Mental Wellness Journal",
        "ADHD-Friendly Planner",
        "Family Planner",
        "Digital Detox Planner",
        "Personal Growth Planner",
        "Custom"
    ],

    plannerTimeframe: [
        "Undated",
        "Daily",
        "Weekly",
        "Monthly",
        "Quarterly",
        "Yearly",
        "30-Day",
        "60-Day",
        "90-Day",
        "12-Week",
        "6-Month",
        "12-Month",
        "Morning",
        "Afternoon",
        "Evening",
        "Weekend",
        "Sunday Reset",
        "Monday Start",
        "Monday–Sunday",
        "Sunday–Saturday",
        "Custom"
    ],

    targetAudience: [
        "General",
        "Women",
        "Men",
        "Teenagers",
        "Students",
        "College Students",
        "Teachers",
        "Working Professionals",
        "Entrepreneurs",
        "Small Business Owners",
        "Freelancers",
        "Busy Moms",
        "Stay-at-Home Moms",
        "Parents",
        "Couples",
        "Families",
        "Beginners",
        "Fitness Beginners",
        "Wellness Enthusiasts",
        "Productivity Enthusiasts",
        "Creatives",
        "Content Creators",
        "ADHD-Friendly Audience",
        "Minimalist Lifestyle Enthusiasts",
        "Self-Care Enthusiasts",
        "Homemakers",
        "Brides-to-Be",
        "Book Lovers",
        "Custom"
    ],

    layoutStyle: [
        "Structured Dashboard",
        "Grid-Based Layout",
        "Modular Card Layout",
        "Editorial Layout",
        "Minimalist Layout",
        "Symmetrical Layout",
        "Asymmetrical Layout",
        "Vertical Column Layout",
        "Horizontal Row Layout",
        "Split-Page Layout",
        "Two-Column Layout",
        "Three-Column Layout",
        "Timeline Layout",
        "Calendar-Based Layout",
        "List-Based Layout",
        "Worksheet Layout",
        "Freeform Layout",
        "Scrapbook Layout",
        "Journal Layout",
        "Layered Collage Layout",
        "Bento Grid Layout",
        "Mixed Layout",
        "Custom"
    ],

    pageComposition: [
        "Mixed Cards Composition",
        "Uniform Grid Composition",
        "Large Header with Compact Sections",
        "Large Writing Area with Small Trackers",
        "Balanced Text and Graphics",
        "Writing-Focused Composition",
        "Checklist-Focused Composition",
        "Tracker-Focused Composition",
        "Calendar-Focused Composition",
        "Split Functional and Decorative Sections",
        "Central Focus Composition",
        "Top-to-Bottom Flow",
        "Left-to-Right Flow",
        "Asymmetrical Balanced Composition",
        "Modular Dashboard Composition",
        "Multi-Section Editorial Composition",
        "Open and Airy Composition",
        "Compact Information Dashboard",
        "Layered Scrapbook Composition",
        "Custom"
    ],

    decorativeDensity: [
        "Ultra-Minimal Decoration",
        "Minimal Decorative Density",
        "Light Decorative Density",
        "Balanced Decorative Density",
        "Moderately Decorative",
        "Rich Decorative Density",
        "Highly Decorative",
        "Maximalist Decoration",
        "Custom"
    ],

    graphicPlacement: [
        "Header Graphics",
        "Corner Graphics",
        "Footer Graphics",
        "Side-Margin Graphics",
        "Centerpiece Graphics",
        "Section Graphics",
        "Background Graphics",
        "Border Graphics",
        "Scattered Accent Graphics",
        "Mixed Graphic Placement",
        "Symmetrical Graphic Placement",
        "Asymmetrical Graphic Placement",
        "Integrated Graphic Placement",
        "Frame-Based Graphic Placement",
        "Top-and-Bottom Graphics",
        "Custom"
    ],

    graphicSize: [
        "Tiny Decorative Accents",
        "Small Accents",
        "Small Graphics",
        "Small-to-Medium Graphics",
        "Medium Graphics",
        "Medium-to-Large Graphics",
        "Large Graphics",
        "Oversized Statement Graphics",
        "Mixed Graphic Sizes",
        "Proportional to Section Size",
        "Custom"
    ],

    contentCardStyle: [
        "Rounded Pastel Cards",
        "Soft Rounded Cards",
        "Minimal Rounded Cards",
        "Square-Corner Cards",
        "Thin-Line Outline Cards",
        "Double-Line Border Cards",
        "Shadowed Cards",
        "Soft Shadow Cards",
        "Layered Paper Cards",
        "Torn-Paper Cards",
        "Vintage Paper Cards",
        "Arch-Top Cards",
        "Scalloped Edge Cards",
        "Ticket-Style Cards",
        "Label-Style Cards",
        "Tabbed Cards",
        "Sticky Note Cards",
        "Washi Tape Cards",
        "Organic Shape Cards",
        "Floral Frame Cards",
        "Minimal Borderless Sections",
        "Alternating Color Cards",
        "Mixed Card Styles",
        "Custom"
    ],

    overallAesthetic: [
        "Elegant Luxury",
        "Minimalist",
        "Modern Minimalist",
        "Soft Feminine",
        "Romantic",
        "Vintage",
        "Retro",
        "Cottagecore",
        "Dark Academia",
        "Light Academia",
        "Coquette",
        "Bohemian",
        "Scandinavian",
        "Japandi",
        "Rustic",
        "Farmhouse",
        "French Country",
        "Modern Editorial",
        "Classic Timeless",
        "Organic Natural",
        "Whimsical",
        "Playful",
        "Kawaii",
        "Cute Pastel",
        "Botanical",
        "Art Deco",
        "Y2K",
        "Coastal",
        "Mediterranean",
        "Clean Professional",
        "Contemporary",
        "Maximalist",
        "Scrapbook Aesthetic",
        "Pinterest-Inspired",
        "Custom"
    ],

    colourPalette: [
        "Beige & Cream",
        "Warm Neutral",
        "Soft Blush Pink",
        "Dusty Rose",
        "Pink & Cream",
        "Sage Green & Ivory",
        "Olive & Beige",
        "Earthy Terracotta",
        "Muted Earth Tones",
        "Dusty Blue & Gray",
        "Navy & Cream",
        "Sky Blue & White",
        "Lavender & Lilac",
        "Mauve & Dusty Pink",
        "Peach & Apricot",
        "Butter Yellow & Cream",
        "Mint & Sage",
        "Soft Pastel Rainbow",
        "Muted Pastel",
        "Monochromatic Beige",
        "Monochromatic Pink",
        "Monochromatic Green",
        "Black & White",
        "Grayscale",
        "Black & Gold",
        "Emerald & Gold",
        "Burgundy & Cream",
        "Jewel Tones",
        "Warm Autumn",
        "Cool Winter",
        "Spring Pastels",
        "Summer Brights",
        "High Contrast",
        "Custom"
    ],

    typography: [
        "Elegant Serif",
        "Classic Serif",
        "Modern Serif",
        "Editorial Serif",
        "High-Contrast Serif",
        "Soft Rounded Sans Serif",
        "Clean Sans Serif",
        "Modern Sans Serif",
        "Geometric Sans Serif",
        "Minimalist Sans Serif",
        "Handwritten Script",
        "Elegant Calligraphy",
        "Brush Script",
        "Casual Handwriting",
        "Vintage Typewriter",
        "Retro Display Typography",
        "Bold Display Typography",
        "Playful Rounded Typography",
        "Monospaced Typography",
        "Serif & Sans Serif Pairing",
        "Serif & Script Pairing",
        "Sans Serif & Script Pairing",
        "Mixed Editorial Typography",
        "Custom"
    ],

    graphicTheme: [
        "Florals",
        "Botanical Leaves",
        "Wildflowers",
        "Roses",
        "Daisies",
        "Sunflowers",
        "Butterflies",
        "Mushrooms",
        "Fruits",
        "Citrus",
        "Garden",
        "Nature",
        "Celestial",
        "Sun & Moon",
        "Stars & Clouds",
        "Hearts & Bows",
        "Ribbons & Lace",
        "Coffee & Café",
        "Books & Reading",
        "Stationery",
        "Cozy Home",
        "Wellness & Self-Care",
        "Fitness & Movement",
        "Food & Cooking",
        "Travel & Adventure",
        "Pets & Animals",
        "Seasonal",
        "Christmas",
        "Halloween",
        "Spring",
        "Summer",
        "Autumn",
        "Winter",
        "Abstract Shapes",
        "Geometric Shapes",
        "Vintage Objects",
        "Fashion & Beauty",
        "No Graphics",
        "Mixed Themes",
        "Custom"
    ],

    graphicStyle: [
        "Sticker Style",
        "Hand-Drawn Illustration",
        "Watercolor Illustration",
        "Flat Vector Illustration",
        "Minimal Line Art",
        "Botanical Line Art",
        "Doodle Style",
        "Cute Cartoon Style",
        "Kawaii Illustration",
        "Vintage Illustration",
        "Retro Illustration",
        "Paper Cutout Style",
        "Collage Style",
        "Scrapbook Style",
        "Stamp Style",
        "Engraved Illustration",
        "Etched Illustration",
        "Ink Illustration",
        "Colored Pencil Illustration",
        "Crayon Illustration",
        "Gouache Illustration",
        "Soft 3D Illustration",
        "Minimal Silhouette",
        "Realistic Illustration",
        "Mixed Illustration Styles",
        "No Illustrations",
        "Custom"
    ],

    overallMood: [
        "Gentle",
        "Calm",
        "Peaceful",
        "Serene",
        "Cozy",
        "Warm",
        "Elegant",
        "Luxurious",
        "Romantic",
        "Dreamy",
        "Whimsical",
        "Playful",
        "Cheerful",
        "Joyful",
        "Fresh",
        "Airy",
        "Grounded",
        "Earthy",
        "Nostalgic",
        "Sophisticated",
        "Professional",
        "Focused",
        "Motivational",
        "Empowering",
        "Uplifting",
        "Mindful",
        "Meditative",
        "Energizing",
        "Bold",
        "Moody",
        "Mysterious",
        "Clean & Refreshing",
        "Custom"
    ],

    density: [
        "Ultra-Minimal Density",
        "Minimal Density",
        "Light Density",
        "Balanced Density",
        "Moderate Density",
        "Moderately Dense",
        "High Density",
        "Very High Density",
        "Content-Rich",
        "Compact Dashboard",
        "Custom"
    ],

    writingSpace: [
        "Minimal Writing Space",
        "Small Writing Areas",
        "Moderate Writing Space",
        "Generous Writing Space",
        "Lots of Writing Space",
        "Extra-Large Writing Areas",
        "Writing-Focused Layout",
        "Balanced Writing and Tracking",
        "Compact Notes Areas",
        "Large Open Notes Section",
        "Full-Width Writing Sections",
        "Lined Writing Areas",
        "Dotted Writing Areas",
        "Blank Writing Areas",
        "Grid Writing Areas",
        "Mixed Writing Areas",
        "Custom"
    ],

    boxStyle: [
        "Rounded Boxes",
        "Soft Rounded Boxes",
        "Slightly Rounded Boxes",
        "Square Boxes",
        "Thin Outline Boxes",
        "Double-Border Boxes",
        "Dashed Outline Boxes",
        "Dotted Outline Boxes",
        "Shadowed Boxes",
        "Soft Shadow Boxes",
        "Pastel-Filled Boxes",
        "Neutral-Filled Boxes",
        "Alternating Color Boxes",
        "Minimal Borderless Boxes",
        "Lined Writing Boxes",
        "Dotted Writing Boxes",
        "Grid Boxes",
        "Checkbox-Based Boxes",
        "Label-Style Boxes",
        "Decorative Frame Boxes",
        "Mixed Box Styles",
        "Custom"
    ],

    headerStyle: [
        "Minimal Headers",
        "Bold Headers",
        "Decorative Headers",
        "Elegant Serif Headers",
        "Script Headers",
        "All-Caps Headers",
        "Small-Caps Headers",
        "Centered Headers",
        "Left-Aligned Headers",
        "Banner Headers",
        "Ribbon Headers",
        "Tab-Style Headers",
        "Label Headers",
        "Underlined Headers",
        "Divider-Line Headers",
        "Highlighted Headers",
        "Icon-Based Headers",
        "Numbered Section Headers",
        "Handwritten Headers",
        "Minimal Text-Only Headers",
        "Mixed Header Styles",
        "Custom"
    ]
};


// ============================================================
// PLANNER INTELLIGENCE
// ============================================================

const plannerIntelligence = {

    "Sunday Reset Planner": {
        sections: [
            "Weekly reflection",
            "Upcoming week priorities",
            "Schedule overview",
            "Home reset checklist",
            "Meal planning",
            "Self-care check-in",
            "Habit check-in",
            "Weekly intention"
        ],
        prompts: [
            "What went well this week?",
            "What needs attention next week?",
            "What are my three most important priorities?",
            "What can I prepare today to make next week easier?"
        ]
    },

    "Fitness Planner": {
        sections: [
            "Weekly movement goals",
            "Workout planning",
            "Exercise tracking",
            "Hydration tracker",
            "Recovery check-in",
            "Energy level",
            "Progress reflection"
        ],
        prompts: [
            "What movement do I want to prioritize?",
            "How did my energy feel?",
            "What felt good during my workouts?",
            "What can I improve next week?"
        ]
    },

    "Wellness Planner": {
        sections: [
            "Wellness check-in",
            "Sleep tracking",
            "Hydration",
            "Movement",
            "Nutrition check-in",
            "Mood tracking",
            "Self-care priorities"
        ],
        prompts: [
            "How am I feeling today?",
            "What does my body need?",
            "What small wellness habit can I prioritize?"
        ]
    },

    "Self-Care Planner": {
        sections: [
            "Self-care priorities",
            "Mood check-in",
            "Rest and recovery",
            "Personal care checklist",
            "Joyful activities",
            "Reflection space"
        ],
        prompts: [
            "What do I need more of?",
            "What can I do today just for myself?",
            "What would help me feel more rested?"
        ]
    },

    "Productivity Planner": {
        sections: [
            "Top priorities",
            "Task list",
            "Time blocking",
            "Important deadlines",
            "Quick wins",
            "Distraction check",
            "End-of-day reflection"
        ],
        prompts: [
            "What are the three most important tasks?",
            "What can wait?",
            "What would make today feel productive?"
        ]
    },

    "Goal-Setting Planner": {
        sections: [
            "Main goal",
            "Why this goal matters",
            "Milestones",
            "Action steps",
            "Progress tracker",
            "Obstacles",
            "Next action"
        ],
        prompts: [
            "Why is this goal important?",
            "What is the next achievable step?",
            "What could get in the way?",
            "How will I know I am making progress?"
        ]
    },

    "Habit Tracker": {
        sections: [
            "Habit list",
            "Habit tracking grid",
            "Daily check-in",
            "Streak tracking",
            "Weekly reflection",
            "Progress notes"
        ],
        prompts: [
            "Which habits matter most right now?",
            "What made this habit easier or harder?",
            "What adjustment can I make?"
        ]
    },

    "Meal Planner": {
        sections: [
            "Weekly meal plan",
            "Breakfast",
            "Lunch",
            "Dinner",
            "Snacks",
            "Grocery list",
            "Meal preparation checklist"
        ],
        prompts: [
            "What meals need preparation?",
            "What ingredients are already available?",
            "What should be added to the grocery list?"
        ]
    },

    "Budget Planner": {
        sections: [
            "Income",
            "Essential expenses",
            "Discretionary spending",
            "Upcoming bills",
            "Savings goal",
            "Spending tracker",
            "Financial priorities"
        ],
        prompts: [
            "What are my most important expenses?",
            "What bills are coming up?",
            "What is my savings priority?",
            "Where can I be more intentional with spending?"
        ]
    },

    "Finance Planner": {
        sections: [
            "Income overview",
            "Expenses",
            "Savings",
            "Debt payments",
            "Financial goals",
            "Upcoming payments",
            "Money reflection"
        ],
        prompts: [
            "What is my main financial priority?",
            "What payment needs attention?",
            "What financial habit do I want to improve?"
        ]
    },

    "Cleaning Planner": {
        sections: [
            "Cleaning priorities",
            "Room-by-room checklist",
            "Deep-clean tasks",
            "Quick cleaning tasks",
            "Laundry",
            "Supplies checklist",
            "Completed tasks"
        ],
        prompts: [
            "Which area needs the most attention?",
            "What can be completed quickly?",
            "Which task should be scheduled next?"
        ]
    },

    "Home Management Planner": {
        sections: [
            "Household tasks",
            "Cleaning",
            "Errands",
            "Shopping list",
            "Appointments",
            "Maintenance",
            "Family priorities"
        ],
        prompts: [
            "What needs attention around the home?",
            "Which errands should be grouped together?",
            "What household task should be handled first?"
        ]
    },

    "Study Planner": {
        sections: [
            "Study goals",
            "Subjects",
            "Assignments",
            "Study schedule",
            "Exam preparation",
            "Focus sessions",
            "Review notes"
        ],
        prompts: [
            "What should I study first?",
            "What assignment has the closest deadline?",
            "What topic needs additional review?"
        ]
    },

    "Student Planner": {
        sections: [
            "Classes",
            "Assignments",
            "Deadlines",
            "Study tasks",
            "Important reminders",
            "Goals",
            "Weekly reflection"
        ],
        prompts: [
            "What school task needs attention first?",
            "What deadline is approaching?",
            "What do I want to accomplish this week?"
        ]
    },

    "Business Planner": {
        sections: [
            "Business priorities",
            "Tasks",
            "Sales goals",
            "Customer follow-ups",
            "Marketing activities",
            "Important deadlines",
            "Business reflection"
        ],
        prompts: [
            "What business activity has the highest priority?",
            "Which customer or lead needs follow-up?",
            "What action could move the business forward?"
        ]
    },

    "Content Planner": {
        sections: [
            "Content goals",
            "Content ideas",
            "Publishing schedule",
            "Platforms",
            "Content formats",
            "Calls to action",
            "Performance notes"
        ],
        prompts: [
            "What content should be created first?",
            "What audience problem can this content solve?",
            "What should be published next?"
        ]
    },

    "Social Media Planner": {
        sections: [
            "Content calendar",
            "Post ideas",
            "Platforms",
            "Captions",
            "Visual ideas",
            "Engagement tasks",
            "Performance tracking"
        ],
        prompts: [
            "What is the main message?",
            "Who is this post for?",
            "What action should the audience take?"
        ]
    },

    "Project Planner": {
        sections: [
            "Project goal",
            "Milestones",
            "Tasks",
            "Deadlines",
            "Dependencies",
            "Progress tracker",
            "Next actions"
        ],
        prompts: [
            "What is the next milestone?",
            "Which task is blocking progress?",
            "What should be completed next?"
        ]
    },

    "Wedding Planner": {
        sections: [
            "Wedding priorities",
            "Vendor checklist",
            "Budget tracking",
            "Guest list",
            "Appointments",
            "To-do list",
            "Important deadlines"
        ],
        prompts: [
            "What wedding task needs attention first?",
            "Which vendor needs follow-up?",
            "What decision needs to be made?"
        ]
    },

    "Travel Planner": {
        sections: [
            "Destination overview",
            "Itinerary",
            "Places to visit",
            "Reservations",
            "Packing checklist",
            "Budget",
            "Travel notes"
        ],
        prompts: [
            "What places do I want to visit?",
            "What reservations need confirmation?",
            "What should I pack?"
        ]
    },

    "Reading Planner": {
        sections: [
            "Reading list",
            "Current book",
            "Reading goal",
            "Pages or chapters",
            "Favorite quotes",
            "Book rating",
            "Reading reflection"
        ],
        prompts: [
            "What do I want to read next?",
            "What did I enjoy about this book?",
            "What idea stayed with me?"
        ]
    },

    "Gratitude Journal": {
        sections: [
            "Things I am grateful for",
            "Small moments",
            "People I appreciate",
            "Positive reflection",
            "Daily intention"
        ],
        prompts: [
            "What made today meaningful?",
            "Who made a positive difference?",
            "What small thing am I grateful for?"
        ]
    },

    "Reflection Journal": {
        sections: [
            "Reflection",
            "What went well",
            "Challenges",
            "Lessons learned",
            "Emotions",
            "Next steps"
        ],
        prompts: [
            "What went well?",
            "What did I learn?",
            "What would I like to do differently?"
        ]
    },

    "Mental Wellness Journal": {
        sections: [
            "Daily check-in",
            "Mood reflection",
            "Stress check",
            "Rest and recovery",
            "Positive moments",
            "Supportive activities"
        ],
        prompts: [
            "How am I feeling?",
            "What has been taking up my mental space?",
            "What supportive activity could I make time for?"
        ]
    },

    "Digital Detox Planner": {
        sections: [
            "Screen-time intention",
            "Offline activities",
            "Digital boundaries",
            "Focus periods",
            "Reflection",
            "Alternative activities"
        ],
        prompts: [
            "What digital habit would I like to change?",
            "What could I do instead?",
            "When do I want to disconnect?"
        ]
    },

    "Personal Growth Planner": {
        sections: [
            "Personal goals",
            "Growth areas",
            "Action steps",
            "Learning goals",
            "Habit development",
            "Reflection",
            "Next steps"
        ],
        prompts: [
            "What area of my life do I want to develop?",
            "What is one small action I can take?",
            "What did I learn about myself?"
        ]
    }
};


// ============================================================
// AUDIENCE INTELLIGENCE
// ============================================================

const audienceIntelligence = {

    "Beginners": `
Keep the content approachable and beginner-friendly.
Avoid complicated terminology.
Use simple instructions and clearly labeled sections.
Prioritize achievable actions and easy-to-understand prompts.
`,

    "Fitness Beginners": `
Keep fitness content approachable for beginners.
Use simple planning concepts and avoid overly advanced workout terminology.
Focus on consistency, preparation, recovery, and realistic progress tracking.
`,

    "Students": `
Keep the structure organized and easy to scan.
Prioritize deadlines, assignments, study sessions, and academic priorities.
`,

    "College Students": `
Keep the design practical and space-efficient.
Prioritize classes, deadlines, study sessions, personal tasks, and weekly priorities.
`,

    "Working Professionals": `
Keep the planner polished and efficient.
Prioritize schedules, deadlines, meetings, priorities, and concise task management.
`,

    "Entrepreneurs": `
Focus on priorities, revenue-generating activities, customers, projects, marketing, and business development.
`,

    "Busy Moms": `
Prioritize practical planning.
Balance household responsibilities, personal needs, family activities, meals, errands, and self-care.
`,

    "Stay-at-Home Moms": `
Balance household management, family responsibilities, meal planning, cleaning, errands, and personal time.
`,

    "Creatives": `
Allow room for brainstorming and visual thinking.
Include flexible idea areas and creative notes.
`,

    "Content Creators": `
Prioritize content ideas, publishing schedules, platforms, creative production, and engagement tasks.
`,

    "Book Lovers": `
Prioritize reading progress, books to read, notes, reflections, and favorite moments.
`
};


// ============================================================
// DENSITY INTELLIGENCE
// ============================================================

const densityInstructions = {

    "Ultra-Minimal Density": `
Keep the number of sections very limited.
Prioritize generous whitespace and only the most important content.
`,

    "Minimal Density": `
Keep the number of sections intentionally limited.
Prioritize readability, generous spacing, and functional simplicity.
`,

    "Light Density": `
Use a comfortable number of sections with plenty of breathing room.
`,

    "Balanced Density": `
Balance useful content with comfortable spacing and visual breathing room.
`,

    "Moderate Density": `
Include a moderate amount of useful information while maintaining readability.
`,

    "Moderately Dense": `
Create a content-rich page while maintaining clear organization and comfortable spacing.
`,

    "High Density": `
Maximize useful information while keeping the page organized and readable.
`,

    "Very High Density": `
Create a highly content-rich dashboard while maintaining clear hierarchy and usable sections.
`,

    "Content-Rich": `
Prioritize useful planner content and include multiple relevant sections without sacrificing readability.
`,

    "Compact Dashboard": `
Use compact sections and efficient spacing to maximize useful content.
`
};


// ============================================================
// WRITING SPACE INTELLIGENCE
// ============================================================

const writingInstructions = {

    "Minimal Writing Space": `
Keep handwriting areas compact and prioritize trackers and structured inputs.
`,

    "Small Writing Areas": `
Use small but practical writing spaces.
`,

    "Moderate Writing Space": `
Provide moderate handwriting areas appropriate for short notes and reflections.
`,

    "Generous Writing Space": `
Provide comfortable writing areas suitable for handwritten responses.
`,

    "Lots of Writing Space": `
Prioritize generous writing areas.
Do not sacrifice handwriting space for unnecessary decoration.
`,

    "Extra-Large Writing Areas": `
Give major sections large, comfortable areas for handwriting.
`,

    "Writing-Focused Layout": `
Prioritize large writing areas over decorative elements.
`,

    "Balanced Writing and Tracking": `
Balance handwriting sections with compact trackers and structured inputs.
`,

    "Large Open Notes Section": `
Include a clearly defined large open notes area.
`
};


// ============================================================
// CUSTOM DROPDOWNS
// ============================================================

Object.entries(options).forEach(([field, values]) => {

    const select = document.getElementById(field);

    if (!select) return;

    select.innerHTML = `
        <option value="">Choose an option...</option>
        ${values.map(value =>
            `<option value="${value}">${value}</option>`
        ).join("")}
    `;

});


// ============================================================
// CUSTOM INPUT HANDLING
// ============================================================

document.querySelectorAll("select").forEach(select => {

    select.addEventListener("change", () => {

        const existing =
            document.getElementById(`${select.id}-custom`);

        if (existing) {
            existing.remove();
        }

        if (select.value === "Custom") {

            const wrapper =
                document.createElement("div");

            wrapper.className =
                "custom-input-wrapper";

            wrapper.style.marginTop = "8px";

            wrapper.innerHTML = `
                <input
                    type="text"
                    id="${select.id}-custom"
                    placeholder="Enter your custom option..."
                >
            `;

            select.parentNode.appendChild(wrapper);
        }

    });

});


// ============================================================
// GET VALUE
// ============================================================

function getValue(id) {

    const select =
        document.getElementById(id);

    if (!select) return "";

    if (select.value === "Custom") {

        const custom =
            document.getElementById(`${id}-custom`);

        return custom && custom.value.trim()
            ? custom.value.trim()
            : "Custom";
    }

    return select.value;
}


// ============================================================
// SET VALUE
// ============================================================

function setValue(id, value) {

    const select =
        document.getElementById(id);

    if (!select) return;

    select.value = value;
}


// ============================================================
// PRESET
// ============================================================

document.getElementById("preset")
    .addEventListener("change", () => {

        const preset =
            document.getElementById("preset").value;

        if (preset !== "elegantSunday") return;

        document.getElementById("plannerTitle").value =
            "Sunday Reset Planner";

        document.getElementById("niche").value =
            "General";

        setValue("productFormat",
            "Single-Page Printable");

        setValue("pageSize",
            "A5 Portrait");

        setValue("plannerType",
            "Sunday Reset Planner");

        setValue("plannerTimeframe",
            "Sunday Reset");

        setValue("targetAudience",
            "Women");

        setValue("layoutStyle",
            "Structured Dashboard");

        setValue("pageComposition",
            "Mixed Cards Composition");

        setValue("decorativeDensity",
            "Balanced Decorative Density");

        setValue("graphicPlacement",
            "Mixed Graphic Placement");

        setValue("graphicSize",
            "Small Accents");

        setValue("contentCardStyle",
            "Rounded Pastel Cards");

        setValue("overallAesthetic",
            "Elegant Luxury");

        setValue("colourPalette",
            "Beige & Cream");

        setValue("typography",
            "Elegant Serif");

        setValue("graphicTheme",
            "Florals");

        setValue("graphicStyle",
            "Sticker Style");

        setValue("overallMood",
            "Gentle");

        setValue("density",
            "Minimal Density");

        setValue("writingSpace",
            "Lots of Writing Space");

        setValue("boxStyle",
            "Rounded Boxes");

        setValue("headerStyle",
            "Minimal Headers");

        generatePrompt();

    });


// ============================================================
// INTELLIGENCE ENGINE
// ============================================================

function getPlannerIntelligence(plannerType) {

    if (plannerIntelligence[plannerType]) {
        return plannerIntelligence[plannerType];
    }

    return {
        sections: [
            "Main priorities",
            "Task checklist",
            "Progress tracker",
            "Notes and reflection",
            "Next steps"
        ],

        prompts: [
            "What is most important?",
            "What needs attention?",
            "What is the next step?"
        ]
    };
}


function getAudienceInstructions(audience) {

    return audienceIntelligence[audience] || `
Make the content appropriate for the selected target audience.
Keep instructions clear, useful, and relevant to their needs.
`;
}


function getDensityInstructions(density) {

    return densityInstructions[density] || `
Maintain a balanced amount of content and whitespace.
`;
}


function getWritingInstructions(writingSpace) {

    return writingInstructions[writingSpace] || `
Provide appropriately sized writing areas.
`;
}


// ============================================================
// SMART CONTENT GENERATOR
// ============================================================

function generateSmartContent() {

    const plannerType =
        getValue("plannerType");

    const audience =
        getValue("targetAudience");

    const density =
        getValue("density");

    const writingSpace =
        getValue("writingSpace");

    const intelligence =
        getPlannerIntelligence(plannerType);

    const sections =
        intelligence.sections
            .map(section => `- ${section}`)
            .join("\n");

    const prompts =
        intelligence.prompts
            .map(prompt => `- ${prompt}`)
            .join("\n");

    return `
SMART PLANNER CONTENT

Based on the selected planner type, automatically include relevant functional content.

Recommended sections:
${sections}

Suggested prompts:
${prompts}

AUDIENCE ADAPTATION

${getAudienceInstructions(audience)}

DENSITY ADAPTATION

${getDensityInstructions(density)}

WRITING SPACE ADAPTATION

${getWritingInstructions(writingSpace)}
`;
}


// ============================================================
// GENERATE PROMPT
// ============================================================

function generatePrompt() {

    const title =
        document.getElementById("plannerTitle")
            .value.trim()
        || "Untitled Planner";

    const niche =
        document.getElementById("niche")
            .value.trim()
        || "General";

    const additional =
        document.getElementById("additionalInstructions")
            .value.trim();

    const plannerType =
        getValue("plannerType")
        || "Planner";

    const smartContent =
        generateSmartContent();


    const prompt = `Create a single-page ${plannerType} for ${getValue("targetAudience") || "a general audience"} in the ${niche} niche.

Title: "${title}"

Create exactly one finished printable page.

The page should function as a practical, content-rich planner rather than simply a decorative page.

Use the selected planner type to automatically determine the most useful sections, trackers, checklists, prompts, writing areas, and planning tools.

${smartContent}

DESIGN SPECIFICATIONS

Product format: ${getValue("productFormat")}

Page size: ${getValue("pageSize")}

Planner type: ${getValue("plannerType")}

Planner timeframe: ${getValue("plannerTimeframe")}

Target audience: ${getValue("targetAudience")}

PAGE DESIGN

Layout style: ${getValue("layoutStyle")}

Page composition: ${getValue("pageComposition")}

Decorative density: ${getValue("decorativeDensity")}

Graphic placement: ${getValue("graphicPlacement")}

Graphic size: ${getValue("graphicSize")}

Content card style: ${getValue("contentCardStyle")}

DESIGN STYLE

Overall aesthetic: ${getValue("overallAesthetic")}

Colour palette: ${getValue("colourPalette")}

Typography: ${getValue("typography")}

Graphic theme: ${getValue("graphicTheme")}

Style of graphics: ${getValue("graphicStyle")}

Overall mood: ${getValue("overallMood")}

LAYOUT SETTINGS

Density: ${getValue("density")}

Writing space: ${getValue("writingSpace")}

Box style: ${getValue("boxStyle")}

Header style: ${getValue("headerStyle")}


CONTENT INTELLIGENCE

Automatically adapt the content to the selected planner type and audience.

Do not blindly include every suggested section if doing so would overcrowd the page.

Prioritize the most useful sections for the selected page size and density.

If the page has limited space, combine related functions into compact cards.

If generous writing space is selected, reduce decorative elements and give more area to handwriting.

If minimal density is selected, prioritize only the highest-value sections.

If content-rich density is selected, include more relevant planning tools while maintaining readability.


VISUAL HIERARCHY

Create a strong visual hierarchy with:

- Decorative title
- Clear subtitle
- Organized section headings
- Functional content cards
- Checklists
- Trackers
- Writing spaces
- Relevant prompts

Vary card sizes and section layouts to create visual interest while maintaining balance.


PRINTABILITY

Use professional print margins suitable for home printing and binder use.

Keep every element safely within the printable area.

Avoid placing important text or graphics near the page edges.

Use comfortably readable font sizes.

Avoid shrinking text simply to fit more content.

Prioritize usability over excessive content.


COMPOSITION

Avoid overcrowding.

Avoid excessive empty space.

Use proportional spacing between sections.

Keep sections aligned and evenly distributed.

Maintain comfortable spacing between headings, content, and decorative elements.

Do not reduce writing space in favor of unnecessary decorative elements.

Keep the page visually cohesive.

Make sure decorative elements support the planner rather than interfere with usability.


GRAPHICS

Use ${getValue("graphicTheme")} as the primary graphic theme.

Use ${getValue("graphicStyle")} graphics.

Keep graphics ${getValue("graphicSize")}.

Use ${getValue("graphicPlacement")}.

Make decorative graphics intentional and clearly visible.

Coordinate decorative elements with the selected ${getValue("colourPalette")} palette.


TYPOGRAPHY

Use ${getValue("typography")} typography.

Create clear visual hierarchy between the title, section headings, labels, instructions, and body text.

Keep body text comfortably readable.

Do not use excessively decorative typography for functional information.


FINAL OUTPUT

Create exactly ONE finished printable page.

Do not generate a cover.

Do not generate a copyright page.

Do not generate a welcome page.

Do not generate a notes page unless it is specifically part of the selected planner content.

Do not generate additional pages.

Do not repeat the page.

Create a polished, professional, editable printable design.

Ensure crisp typography, clean lines, sharp illustrations, and excellent print clarity.

${additional ? `
ADDITIONAL USER INSTRUCTIONS

${additional}
` : ""}

Final priority order:

1. Planner usability
2. Relevant planner content
3. Readability
4. Writing space
5. Clear visual hierarchy
6. Balanced composition
7. Aesthetic styling
8. Decorative elements
`;

    document.getElementById("promptOutput").value =
        prompt.trim();

    updateCharacterCount();
}


// ============================================================
// GENERATE BUTTON
// ============================================================

document.getElementById("generateBtn")
    .addEventListener("click", generatePrompt);


// ============================================================
// COPY BUTTON
// ============================================================

document.getElementById("copyBtn")
    .addEventListener("click", async () => {

        const output =
            document.getElementById("promptOutput");

        if (!output.value) {
            generatePrompt();
        }

        try {

            await navigator.clipboard.writeText(
                document.getElementById("promptOutput").value
            );

            const button =
                document.getElementById("copyBtn");

            const original =
                button.textContent;

            button.textContent =
                "✓ Copied!";

            setTimeout(() => {
                button.textContent =
                    original;
            }, 1500);

        } catch (error) {

            alert(
                "Copy failed. Please select the prompt and copy it manually."
            );

        }

    });


// ============================================================
// RESET
// ============================================================

document.getElementById("resetBtn")
    .addEventListener("click", () => {

        document.querySelectorAll("input, textarea")
            .forEach(element => {
                element.value = "";
            });

        document.querySelectorAll("select")
            .forEach(select => {

                select.selectedIndex = 0;

                const custom =
                    document.getElementById(
                        `${select.id}-custom`
                    );

                if (custom) {
                    custom.remove();
                }

            });

        document.getElementById("promptOutput")
            .value = "";

        updateCharacterCount();

    });


// ============================================================
// CHARACTER COUNT
// ============================================================

document.getElementById("promptOutput")
    .addEventListener("input", updateCharacterCount);


function updateCharacterCount() {

    const output =
        document.getElementById("promptOutput");

    document.getElementById("characterCount")
        .textContent =
        `${output.value.length.toLocaleString()} characters`;
}


// ============================================================
// INITIAL STATE
// ============================================================

generatePrompt();
