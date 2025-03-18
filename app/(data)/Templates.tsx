export default [
    {
        name: "Blog Title",
        description: "An AI-powered tool that generates compelling blog titles based on your niche and outline.",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/2800/2800015.png",
        aiPrompt: "Provide five engaging blog title ideas in bullet points based on the given niche and outline. Format the response in a rich text editor.",
        slug: "generate-blog-title",
        form: [
            {
                label: "Enter your blog niche",
                field: "input",
                name: "niche",
                required: true
            },
            {
                label: "Enter blog outline",
                field: "textarea",
                name: "outline"
            }
        ]
    },
    {
        name: "Blog Content",
        description: "An AI-powered tool that generates high-quality blog content based on your topic and niche.",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/2593/2593549.png",
        aiPrompt: "Create a well-structured and engaging blog post based on the given topic, niche, and key points. Format the response in a rich text editor.",
        slug: "generate-blog-content",
        form: [
            {
                label: "Enter your blog niche",
                field: "input",
                name: "niche",
                required: true
            },
            {
                label: "Enter blog topic",
                field: "textarea",
                name: "topic",
                required: true
            }
        ]
    },
    {
        name: "Blog Topic Ideas",
        description: "An AI-driven tool that provides unique and engaging blog topic ideas tailored to your niche.",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/18999/18999624.png",
        aiPrompt: "Generate 10 creative blog topic ideas based on the provided niche. Return the response in bullet points.",
        slug: "generate-blog-topic-ideas",
        form: [
            {
                label: "Enter your blog niche",
                field: "input",
                name: "niche",
                required: true
            }
        ]
    },
    {
        name: "YouTube SEO Title",
        description: "An AI tool that crafts optimized YouTube titles to enhance your video's visibility and engagement.",
        category: "YouTube",
        icon: "https://cdn-icons-png.flaticon.com/128/174/174883.png",
        aiPrompt: "Generate five SEO-friendly and engaging YouTube video titles based on the given topic and keywords.",
        slug: "youtube-seo-title",
        form: [
            {
                label: "Enter your video topic",
                field: "input",
                name: "topic",
                required: true
            },
            {
                label: "Enter relevant keywords",
                field: "textarea",
                name: "keywords"
            }
        ]
    },
    {
        name: "YouTube Description",
        description: "An AI-powered tool that generates compelling YouTube descriptions to boost engagement and SEO ranking.",
        category: "YouTube",
        icon: "https://cdn-icons-png.flaticon.com/128/1383/1383260.png",
        aiPrompt: "Write a professional and engaging YouTube video description incorporating the given keywords and topic.",
        slug: "youtube-description",
        form: [
            {
                label: "Enter your video topic",
                field: "input",
                name: "topic",
                required: true
            },
            {
                label: "Enter relevant keywords",
                field: "textarea",
                name: "keywords"
            }
        ]
    },
    {
        name: "YouTube Tags",
        description: "An AI tool that generates optimized YouTube tags to improve discoverability and reach.",
        category: "YouTube",
        icon: "https://cdn-icons-png.flaticon.com/128/10884/10884882.png",
        aiPrompt: "Generate a list of effective YouTube tags based on the given topic and keywords.",
        slug: "youtube-tags",
        form: [
            {
                label: "Enter your video topic",
                field: "input",
                name: "topic",
                required: true
            },
            {
                label: "Enter relevant keywords",
                field: "textarea",
                name: "keywords"
            }
        ]
    },
    {
        name: "Rewrite Article",
        description: "An AI-powered tool that rewrites content while ensuring originality and readability.",
        category: "Writing",
        icon: "https://cdn-icons-png.flaticon.com/128/6612/6612250.png",
        aiPrompt: "Rephrase the given content to be plagiarism-free while maintaining its meaning and clarity.",
        slug: "rewrite-article",
        form: [
            {
                label: "Enter text to rewrite",
                field: "textarea",
                name: "content",
                required: true
            }
        ]
    },
    {
        name: "Text Improver",
        description: "An AI-driven tool that enhances and refines your text for better clarity, grammar, and engagement.",
        category: "Writing",
        icon: "https://cdn-icons-png.flaticon.com/128/3721/3721901.png",
        aiPrompt: "Improve the given text by enhancing readability, fixing grammar, and making it more engaging.",
        slug: "text-improver",
        form: [
            {
                label: "Enter text to improve",
                field: "textarea",
                name: "content",
                required: true
            }
        ]
    },
    {
        name: "Add Emojis to Text",
        description: "An AI tool that enhances your text with relevant emojis for better engagement and expression.",
        category: "Writing",
        icon: "https://cdn-icons-png.flaticon.com/128/742/742751.png",
        aiPrompt: "Add suitable emojis to the given text while keeping it natural and engaging.",
        slug: "add-emojis-to-text",
        form: [
            {
                label: "Enter text",
                field: "textarea",
                name: "content",
                required: true
            }
        ]
    },
    {
        name: "Instagram Post Generator",
        description: "An AI-powered tool that creates captivating Instagram posts based on your topic and intent.",
        category: "Social Media",
        icon: "https://cdn-icons-png.flaticon.com/128/174/174855.png",
        aiPrompt: "Generate a creative and engaging Instagram post caption based on the provided topic and tone.",
        slug: "instagram-post-generator",
        form: [
            {
                label: "Enter your post topic",
                field: "input",
                name: "topic",
                required: true
            },
            {
                label: "Enter desired tone (e.g., fun, motivational, informative)",
                field: "input",
                name: "tone"
            }
        ]
    },
    {
        name: "Instagram Hashtags",
        description: "An AI tool that suggests trending and relevant hashtags to boost Instagram post reach.",
        category: "Social Media",
        icon: "https://cdn-icons-png.flaticon.com/128/4510/4510810.png",
        aiPrompt: "Generate a list of optimized Instagram hashtags based on the given topic.",
        slug: "instagram-hashtags",
        form: [
            {
                label: "Enter your post topic",
                field: "input",
                name: "topic",
                required: true
            }
        ]
    },
    {
        name: "English Grammar Check",
        description: "An AI-powered grammar checker that corrects and enhances your text for better readability and accuracy.",
        category: "Writing",
        icon: "https://cdn-icons-png.flaticon.com/128/5309/5309804.png",
        aiPrompt: "Check and correct grammar, spelling, and sentence structure for the given text.",
        slug: "english-grammar-check",
        form: [
            {
                label: "Enter text to check",
                field: "textarea",
                name: "content",
                required: true
            }
        ]
    },
    {
        name: "Write Code",
        description: "An AI-driven coding assistant that generates clean and efficient code based on given requirements.",
        category: "Coding",
        icon: "https://cdn-icons-png.flaticon.com/128/4997/4997543.png",
        aiPrompt: "Generate optimized and well-commented code based on the provided programming language and requirements.",
        slug: "write-code",
        form: [
            {
                label: "Enter programming language",
                field: "input",
                name: "language",
                required: true
            },
            {
                label: "Enter code requirements",
                field: "textarea",
                name: "requirements",
                required: true
            }
        ]
    },
    {
        name: "Explain Code",
        description: "An AI tool that simplifies and explains complex code in an easy-to-understand manner.",
        category: "Coding",
        icon: "https://cdn-icons-png.flaticon.com/128/10817/10817310.png",
        aiPrompt: "Analyze and provide a clear, step-by-step explanation of the given code snippet.",
        slug: "explain-code",
        form: [
            {
                label: "Enter code snippet",
                field: "textarea",
                name: "code",
                required: true
            }
        ]
    }
]
