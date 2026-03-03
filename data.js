const HALL_OF_FAME = [
    { name: "ChatGPT", domain: "chatgpt.com", link: "https://chatgpt.com", sub: "GPT-5.2 Elite" },
    { name: "Gemini", domain: "gemini.google.com", link: "https://gemini.google.com", sub: "3.0 Pro (Research)" },
    { name: "Claude", domain: "claude.ai", link: "https://claude.ai", sub: "4.5 Agentic Logic" },
    { name: "Perplexity", domain: "perplexity.ai", link: "https://perplexity.ai", sub: "AI Search Engine" }
];

const CHINESE_LLMS = [
    { name: "DeepSeek", domain: "deepseek.com", link: "https://deepseek.com", tag: "Coding Expert" },
    { name: "Kimi", domain: "kimi.ai", link: "https://www.kimi.ai", tag: "2M Context" },
    { name: "Qwen", domain: "qwenlm.ai", link: "https://chat.qwenlm.ai", tag: "Alibaba Global" }
];

const TOOL_WINNERS = [
    {
        category: "Coding Assistants (IDE)",
        paid: { name: "Cursor", domain: "cursor.com", link: "https://cursor.com", info: "AI-First Code Editor" },
        free: { name: "Windsurf", domain: "codeium.com", link: "https://codeium.com/windsurf", info: "Free Unlimited Context" }
    },
    {
        category: "App Developers (No-Code)",
        paid: { name: "Lovable", domain: "lovable.dev", link: "https://lovable.dev", info: "Full-Stack Web Apps" },
        free: { name: "Bolt.new", domain: "bolt.new", link: "https://bolt.new", info: "Prompt-to-Deployed App" }
    },
    {
        category: "Resume & Career",
        paid: { name: "Wobo AI", domain: "wobo.ai", link: "https://wobo.ai", info: "24-Point ATS Scan" },
        free: { name: "Teal HQ", domain: "tealhq.co", link: "https://tealhq.co", info: "Best Job Tracker" }
    },
    {
        category: "Small Photo Editors",
        paid: { name: "Luminar Neo", domain: "skylum.com", link: "https://skylum.com/luminar", info: "Pro Portrait/Sky Fix" },
        free: { name: "Pixlr AI", domain: "pixlr.com", link: "https://pixlr.com", info: "Fast Browser Editing" }
    },
    {
        category: "Small Video Editors",
        paid: { name: "OpusClip", domain: "opus.pro", link: "https://www.opus.pro", info: "Viral Short Generator" },
        free: { name: "CapCut AI", domain: "capcut.com", link: "https://www.capcut.com", info: "Best All-In-One" }
    },
    {
        category: "Research & Study",
        paid: { name: "NotebookLM Pro", domain: "notebooklm.google", link: "https://notebooklm.google", info: "Audio Overviews" },
        free: { name: "NotebookLM", domain: "notebooklm.google", link: "https://notebooklm.google", info: "Personal Research" }
    },
    {
        category: "PowerPoint & Slides",
        paid: { name: "GenPPT", domain: "genppt.com", link: "https://genppt.com", info: "Deep Research Decks" },
        free: { name: "Gamma AI", domain: "gamma.app", link: "https://gamma.app", info: "Instant Presentations" }
    },
    {
        category: "Audio & Voiceover",
        paid: { name: "ElevenLabs", domain: "elevenlabs.io", link: "https://elevenlabs.io", info: "Emotional Realism" },
        free: { name: "TTSMaker", domain: "ttsmaker.com", link: "https://ttsmaker.com", info: "No Word Limits" }
    }
];