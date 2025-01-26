const { createClient } = require('@sanity/client'); // Updated import

// Configure Sanity client
const client = createClient({
    projectId: 'cxmsgrac', // Replace with your local project ID
    dataset: 'production',         // Replace with your dataset name
    token: 'skMAPr6eAekium3KU6MhR652lF3JoeIkhy3NhIa7dDkhE3f5fa8mVB9iOs8jWhUHBsyboAe6riL1NB8LxFua6Cn9RhLyHuUGywO2c2AkUHLyPNsFzB24EO8Ya7ttQq5AqfH555pVdOJcExFgjbQGs0Kiabs5y4vG2Zl2w40m4KgXmtYAXSMz',      // Use the current date
    useCdn: false,                 // Disable CDN for local fetch
});

// Array of products
const products = [
    {
        "_type": "my_products",
        "name": "Oil Loc\u00ae - Oil Removal System",
        "slug": {
            "_type": "slug",
            "current": "oil-loc-oil-removal-system"
        },
        "category": {
            "_type": "reference",
            "_ref": "d2ed22bf-a33d-411d-86ab-8b32e8a8f74d"
        },
        "tagline": "Oil-Free Water: The Absolute Choice for Clarity",
        "shortDescription": "Oil-Loc is an innovative oil separation plant designed to effectively remove oil contaminants from industrial wastewater. The system employs cartridge filter technology, ensuring superior separation of oil and water. Its compact, skid-mounted design makes installation and maintenance straightforward, while its robust, corrosion-resistant construction ensures long-term operation in harsh industrial conditions.",
        "sections": [
            {
                "_type": "section",
                "title": "Applications",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Food & Beverage Industry",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Petrochemical and Refining Processes",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Automotive and Aerospace Industries",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Surface Treatment Plants",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Effluent Treatment in Industrial Units",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "And more\u2026",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Features and Benefits",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Advanced cartridge filtration technology for efficient oil removal.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Compact and skid-mounted for ease of installation and maintenance.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Corrosion-resistant construction for enhanced durability and longevity.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Energy-efficient operation, reducing overall operational costs.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Handles varying oil loads with high capacity.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Product Range",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "1 \u2013 50 m\u00b3/h",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Customized Options",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "High-Flow Systems",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Multi-Phase Separation",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Modular Skid-Mounted Units",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            }
        ]
    },
    {
        "_type": "my_products",
        "name": "Silica-Loc\u00ae - Silica Removal System",
        "slug": {
            "_type": "slug",
            "current": "silica-loc-silica-removal-system"
        },
        "category": {
            "_type": "reference",
            "_ref": "d2ed22bf-a33d-411d-86ab-8b32e8a8f74d"
        },
        "tagline": "Silica Solved: Precision Treatment, Absolute Results",
        "shortDescription": "Silica-Loc is a specialized filtration system designed to efficiently remove silica from water, ensuring the production of high-quality water for a wide range of industrial applications. It minimizes silica scale formation, which can cause damage to equipment and reduce operational efficiency.",
        "sections": [
            {
                "_type": "section",
                "title": "Applications",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Boiler Feed Water Treatment",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Pharmaceutical and Chemical Industries",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Semiconductor and Electronics Manufacturing",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Cooling Tower Make-Up Water",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "High-Purity Water Applications",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "And more\u2026",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Features and Benefits",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Provides efficient and consistent silica removal for enhanced water quality.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Compact, space-saving design with modular components for flexible installation.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Low water rejection ratio to minimize waste and improve operational efficiency.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Built from robust materials to ensure long operational life and reliability.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Integrated monitoring and data logging for optimized process control.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Product Range",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "5 \u2013 200 m\u00b3/h",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Customized Options",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Specialized Pre-treatment for Hard Water",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "High-Flow Silica Removal",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            }
        ]
    },
    {
        "_type": "my_products",
        "name": "Amoloc\u00ae - Ammonia Removal System",
        "slug": {
            "_type": "slug",
            "current": "amoloc-ammonia-removal-system"
        },
        "category": {
            "_type": "reference",
            "_ref": "d2ed22bf-a33d-411d-86ab-8b32e8a8f74d"
        },
        "tagline": "Clear Solutions for Ammonia-Free Water",
        "shortDescription": "Ionic's Ammonia Removal System is a highly efficient treatment solution designed to remove ammonia from water, ensuring safe and clean discharge or reuse. It is ideal for industries such as power plants, agriculture, aquaculture, and municipal water treatment facilities.",
        "sections": [
            {
                "_type": "section",
                "title": "Applications",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Drinking Water Treatment",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Industrial Effluent Treatment",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Power Plants and Refineries",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Agricultural and Aquaculture Waste Management",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Municipal Wastewater Treatment",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "And more\u2026",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Features and Benefits",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Highly efficient ammonia removal for safe discharge or reuse of treated water.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Compact and versatile design, suitable for both small and large-scale applications.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Sustainable operation with minimal chemical usage, reducing operational costs.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Customizable system design to meet specific client requirements and water quality conditions.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Energy-efficient technology reduces overall operational expenses.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Product Range",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "5 \u2013 500+ m\u00b3/h",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Customized Options",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Customized De-Nitrification Systems",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Pre-treatment Configurations",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "High-Capacity Solutions",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            }
        ]
    },
    {
        "_type": "my_products",
        "name": "Turbiloc\u00ae - Active Multimedia Filter",
        "slug": {
            "_type": "slug",
            "current": "turbiloc-active-multimedia-filter"
        },
        "category": {
            "_type": "reference",
            "_ref": "d2ed22bf-a33d-411d-86ab-8b32e8a8f74d"
        },
        "tagline": "Turbid Water In, Crystal Clear Out: The Turbiloc Promise",
        "shortDescription": "Turbiloc-Active Multimedia Filter is a cutting-edge solution designed to replace traditional sand filters, offering enhanced filtration performance without the need for additional infrastructure investments. The system resists biofouling, bio-coagulation, and transient wormhole channeling, ensuring continuous operation without media recharging or replacement.",
        "sections": [
            {
                "_type": "section",
                "title": "Applications",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Water Treatment Plants",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Industrial Effluent Treatment",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Cooling Water Treatment",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Municipal Water Filtration",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Wastewater Treatment",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "And more\u2026",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Features and Benefits",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Doubles the performance of traditional sand filters with no need for infrastructure expansion.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Resists biofouling, bio-coagulation, and wormhole channelling for reliable, long-term performance.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Eliminates the need for media replacement or recharging, reducing operational downtime and maintenance costs.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Capable of handling high Total Suspended Solids (TSS) concentrations of up to 400 ppm.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Ensures TSS and turbidity levels below 5 ppm/NTU for high-quality treated water.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Product Range",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "10 \u2013 1000+ m\u00b3/h",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Customized Options",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Dual-Media Systems",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "High-Pressure Applications",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Custom Filtration Materials and Configurations",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            }
        ]
    },
    {
        "_type": "my_products",
        "name": "ACF - Activated Carbon Filter",
        "slug": {
            "_type": "slug",
            "current": "acf-activated-carbon-filter"
        },
        "category": {
            "_type": "reference",
            "_ref": "d2ed22bf-a33d-411d-86ab-8b32e8a8f74d"
        },
        "tagline": "Pure Water, Absolute Clarity: The Power of Activated Carbon",
        "shortDescription": "Ionic Engineering Technology Pvt Ltd provides advanced Activated Carbon Filter (ACF) systems designed for efficient removal of contaminants, chemicals, and odors from water and air. These filters ensure high-quality water for various industrial applications, protecting equipment and improving operational efficiency.",
        "sections": [
            {
                "_type": "section",
                "title": "Applications",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Water & Wastewater Treatment",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Industrial Effluent Treatment",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Food & Beverage Processing",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Chemical & Pharmaceutical Industries",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Air Purification Systems",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Features and Benefits",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "High Adsorption Capacity: Effective in removing a wide range of contaminants.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Easy to Maintain: Simple to replace or regenerate the filter media.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Improved Water Quality: Enhances taste and odor.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Versatile: Suitable for various applications.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Environmentally Friendly: Reduces water contaminants without chemicals.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Product Range",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "1 \u2013 1000+ m\u00b3/h",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Customized Options",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "High-Flow Systems",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Multi-Phase Separation",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Modular Skid-Mounted Units",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            }
        ]
    },
    {
        "_type": "my_products",
        "name": "Nanofiltration",
        "slug": {
            "_type": "slug",
            "current": "nanofiltration"
        },
        "category": {
            "_type": "reference",
            "_ref": "d2ed22bf-a33d-411d-86ab-8b32e8a8f74d"
        },
        "tagline": "Fine Filtration for an Absolutely Clear Choice",
        "shortDescription": "Nanofiltration (NF) is a membrane filtration process that utilizes semi-permeable membranes with pore sizes ranging from 1 to 10 nanometers. This technology effectively removes divalent and larger ions, organic molecules, and certain pathogens from water, offering a balance between high-quality water production and operational efficiency.",
        "sections": [
            {
                "_type": "section",
                "title": "Applications",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Industrial Water Softening",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Removal of Dissolved Salts and Contaminants",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Food & Beverage Industry (Product Water)",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Dairy Industry (Whey Processing)",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Desalination Pre-treatment",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "And more\u2026",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Features and Benefits",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Selective removal of divalent and larger ions for high-quality output.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Energy-efficient operation with low-pressure requirements.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Compact, skid-mounted design for easy installation.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Corrosion-resistant materials for enhanced durability.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Advanced membranes for long-lasting performance.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Product Range",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "10 \u2013 200 m\u00b3/h",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Customized Options",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "High-Flux Membranes",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Tailored Filtration for Specific Contaminants",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Compact Systems for Limited Space",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            }
        ]
    },
    {
        "_type": "my_products",
        "name": "Ultrafiltration",
        "slug": {
            "_type": "slug",
            "current": "ultrafiltration"
        },
        "category": {
            "_type": "reference",
            "_ref": "d2ed22bf-a33d-411d-86ab-8b32e8a8f74d"
        },
        "tagline": "Ultra Clarity, Absolute Confidence",
        "shortDescription": "Ultrafiltration (UF) is a membrane filtration process that removes suspended solids, bacteria, viruses, and larger organic molecules from water. It is commonly used as a pre-treatment process for reverse osmosis systems and standalone filtration applications, offering an energy-efficient solution for water treatment.",
        "sections": [
            {
                "_type": "section",
                "title": "Applications",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Pre-treatment for reverse osmosis systems (RO)",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Pharmaceutical and biotech industries",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Surface and groundwater filtration",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Food & Beverage Industry (Juice Clarification)",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Industrial Process Water Treatment",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "And more\u2026",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Features and Benefits",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Advanced membrane technology for fine filtration, removing small particles and pathogens.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "High resistance to fouling, ensuring extended membrane life and reduced maintenance.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Energy-efficient design with low operational costs compared to other filtration methods.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Fully automatic backwash and cleaning cycles for easy maintenance.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Modular and compact design for flexibility in installation.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Product Range",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "1 \u2013 1000+ L/h",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Customized Options",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Multi-Channel Dosing",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Remote Monitoring Systems",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Integration with Existing Control Systems",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            }
        ]
    },
    {
        "_type": "my_products",
        "name": "Reverse Osmosis (RO) System",
        "slug": {
            "_type": "slug",
            "current": "reverse-osmosis-system"
        },
        "category": {
            "_type": "reference",
            "_ref": "d2ed22bf-a33d-411d-86ab-8b32e8a8f74d"
        },
        "tagline": "Closed Loop, Open Possibilities: The Smart RO Solution",
        "shortDescription": "Reverse Osmosis (RO) is a highly effective, pressure-driven water purification process that separates pure water from salty or contaminated water using semi-permeable membranes. Widely used across industries, RO systems produce clean water for various applications, ensuring high efficiency and reliability.",
        "sections": [
            {
                "_type": "section",
                "title": "Applications",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Drinking Water Production",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Industrial Process Water Treatment",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Wastewater Treatment and Reuse",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Desalination of Brackish Water and Seawater",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Food and Beverage Industry",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Pharmaceutical and Biotech Industries",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "And more\u2026",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Features and Benefits",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Efficiently removes salts, minerals, and contaminants from water, providing high-quality output.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Membrane technology ensures separation of pure water while minimizing energy consumption.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Robust systems designed to handle varying water quality and conditions.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Low maintenance requirements with the potential for long-lasting performance.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Ideal for a wide range of industries, including water treatment, food processing, and pharmaceuticals.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Product Range",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "10 \u2013 500+ m\u00b3/day",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Customized Options",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Integrated Energy Recovery",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "High-Efficiency Reverse Osmosis Units",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Variable Flow Solutions",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            }
        ]
    },
    {
        "_type": "my_products",
        "name": "Quick Cycle Automatic DM Plant",
        "slug": {
            "_type": "slug",
            "current": "quick-cycle-automatic-dm-plant"
        },
        "category": {
            "_type": "reference",
            "_ref": "d2ed22bf-a33d-411d-86ab-8b32e8a8f74d"
        },
        "tagline": "Quick, Clean, and Reliable: Demineralization Made Simple",
        "shortDescription": "Ionic's Quick Cycle Automatic Demineralization (DM) Plant offers efficient and sustainable water treatment solutions. It utilizes advanced ion exchange resin technology to produce high-quality water while minimizing operational costs, chemical usage, and environmental impact.",
        "sections": [
            {
                "_type": "section",
                "title": "Applications",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Power Plants",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Pharmaceutical and Biotech Industries",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Semiconductor Manufacturing",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Food & Beverage Industries",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Chemical and Petrochemical Industries",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "And more\u2026",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Features and Benefits",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Fully automatic, PLC-controlled operation ensures ease of use and reduces manual intervention.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Short service cycle and regeneration time enhance efficiency and reduce downtime.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Compact, skid-mounted design reduces space requirements and simplifies installation.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Corrosion-resistant construction ensures long service life and reliability.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Produces mixed-bed quality water without the need for a separate mixed-bed unit.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Product Range",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "5 \u2013 300+ m\u00b3/h",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Customized Options",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Customized Resin Regeneration",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Portable Systems",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "High-Efficiency Configurations for Low Water Quality",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            }
        ]
    },
    {
        "_type": "my_products",
        "name": "Capacitive Electro Desalination (CED)",
        "slug": {
            "_type": "slug",
            "current": "capacitive-electro-desalination"
        },
        "category": {
            "_type": "reference",
            "_ref": "d2ed22bf-a33d-411d-86ab-8b32e8a8f74d"
        },
        "tagline": "Eco-Friendly Desalination: Low-Energy, High-Performance Solutions",
        "shortDescription": "As the global population grows, the demand for sustainable water treatment solutions becomes more critical. IONIC's Capacitive Electro Desalination (CED) technology offers an innovative and eco-friendly approach to desalination, focusing on water reuse and resource conservation. Operating efficiently at ambient temperatures, CED delivers high-performance desalination while minimizing environmental impact. Ideal for industries seeking scalable, cost-effective, and sustainable solutions for water treatment and reuse, CED reduces operational costs and conserves water resources.",
        "sections": [
            {
                "_type": "section",
                "title": "Applications",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Boiler Feedwater Systems",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Cooling Towers",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Textile and Garment Manufacturing",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Commercial Laundries",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Food and Beverage Production",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "General Manufacturing Processes",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Features and Benefits",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Eco-friendly operation with low energy consumption and minimal chemical use.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "High efficiency in removing dissolved salts and ions at ambient temperatures.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Enables water reuse, conserving resources and reducing wastewater discharge.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Scalable design adaptable to various capacities for diverse industrial needs.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Low operating costs, reducing energy and maintenance expenses.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Sustainable solution supporting water sustainability goals and regulatory compliance.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "PLC + HMI or mini-controller-based automation and redundancy options available.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Product Range",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "0.5 \u2013 200+ m\u00b3/day",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Customized Options",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Low-Energy Consumption Models",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Modular and Scalable Systems",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Tailored for Specific Salinity Levels",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            }
        ]
    },
    {
        "_type": "my_products",
        "name": "Hi-Purity Water Systems",
        "slug": {
            "_type": "slug",
            "current": "hi-purity-water-systems"
        },
        "category": {
            "_type": "reference",
            "_ref": "d2ed22bf-a33d-411d-86ab-8b32e8a8f74d"
        },
        "tagline": "Uncompromised Purity: The Absolute Standard for High Performance",
        "shortDescription": "Hi-Purity Water Systems are designed to produce ultra-pure water that meets stringent quality standards required for critical industrial and scientific applications. These systems utilize advanced filtration and deionization technologies to remove even the smallest impurities, ensuring the highest levels of purity. Essential for industries like pharmaceuticals, biotechnology, semiconductor manufacturing, and research laboratories, they provide consistent, high-quality output while being energy-efficient, reducing operational costs.",
        "sections": [
            {
                "_type": "section",
                "title": "Applications",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Pharmaceutical & Biotech Industries",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Semiconductor Manufacturing",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Food & Beverage (Sterile Applications)",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Power Plants (Turbine Water)",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Research Laboratories",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "And more\u2026",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Features and Benefits",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Produces ultra-pure water with minimal contaminants for critical processes.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Advanced filtration and deionization technologies ensure high-quality water production.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Skid-mounted design for compact installation, saving valuable space.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Energy-efficient design reduces operational costs while maintaining high performance.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "PLC + HMI or mini-controller-based automation and redundancy options are available.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Product Range",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "0.1 \u2013 50+ m\u00b3/h",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Customized Options",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Multi-Stage Systems",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Specific Conductivity or Ion Removal",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Integration with Industrial Process Requirements",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            }
        ]
    },
    {
        "_type": "my_products",
        "name": "Seawater Desalination",
        "slug": {
            "_type": "slug",
            "current": "seawater-desalination"
        },
        "category": {
            "_type": "reference",
            "_ref": "d2ed22bf-a33d-411d-86ab-8b32e8a8f74d"
        },
        "tagline": "Turning Seawater into Freshwater: The Absolute Solution",
        "shortDescription": "Seawater desalination is a process designed to remove salt and other impurities from seawater, making it suitable for drinking, irrigation, and industrial use. This system utilizes advanced reverse osmosis (RO) technology to provide high-efficiency water desalination, ensuring a reliable supply of fresh water in coastal and seawater-laden areas. It is ideal for regions facing water scarcity or where freshwater resources are limited. The system is designed for flexibility and can meet varying water demands in applications such as municipal water supply, industrial process water, and agricultural irrigation.",
        "sections": [
            {
                "_type": "section",
                "title": "Applications",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Drinking Water Supply for Coastal Areas",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Industrial Process Water in Seawater Regions",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Power Plants and Refineries Near Oceans",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Shipboard and Offshore Water Supply",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Agricultural Irrigation",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "And more\u2026",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Features and Benefits",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "High-efficiency membranes provide excellent salt rejection for clean water production.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Energy recovery systems reduce operational costs by improving efficiency.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Corrosion-resistant materials ensure durability in harsh marine environments.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Compact, modular design allows for flexible installation in different locations.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "PLC + HMI or mini-controller-based automation and redundancy options available based on client requirements.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Product Range",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "10 \u2013 1000+ m\u00b3/day",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Customized Options",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Energy-Efficient Configurations",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "High-Pressure Reverse Osmosis Units",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Tailored Pre-Treatment Systems",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            }
        ]
    },
    {
        "_type": "my_products",
        "name": "Brackish Water Desalination",
        "slug": {
            "_type": "slug",
            "current": "brackish-water-desalination"
        },
        "category": {
            "_type": "reference",
            "_ref": "d2ed22bf-a33d-411d-86ab-8b32e8a8f74d"
        },
        "tagline": "Freshwater from Brackish Sources: The Clear Choice for Sustainability",
        "shortDescription": "Brackish Water Desalination systems are designed to remove dissolved salts and other impurities from brackish water sources, making it suitable for industrial and municipal applications. These systems utilize reverse osmosis (RO) technology to efficiently separate salts and contaminants, providing high-quality water for industrial processes, agriculture, and drinking water supply. With optimized energy recovery and efficient membrane technology, these systems ensure reduced operational costs and reliable performance in areas with limited freshwater sources.",
        "sections": [
            {
                "_type": "section",
                "title": "Applications",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Industrial Process Water in Inland Areas",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Agriculture and Irrigation",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Municipal Drinking Water Supply",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Power and Energy Sectors",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Textile and Leather Industries",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "And more\u2026",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Features and Benefits",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "High-efficiency membranes provide effective desalination of brackish water.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Optimized recovery rates and energy-saving design reduce operational costs.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Corrosion-resistant components ensure durability and reliable performance.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Skid-mounted, compact design facilitates easy deployment and integration.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "PLC + HMI or mini-controller-based automation and redundancy options available based on client requirements.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Product Range",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "10 \u2013 500+ m\u00b3/day",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Customized Options",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Configurations for Variable Water Quality",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Remote Monitoring",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Energy Recovery Units",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            }
        ]
    },
    {
        "_type": "my_products",
        "name": "Hot Water Generation Systems",
        "slug": {
            "_type": "slug",
            "current": "hot-water-generation-systems"
        },
        "category": {
            "_type": "reference",
            "_ref": "d2ed22bf-a33d-411d-86ab-8b32e8a8f74d"
        },
        "tagline": "Efficient Heating, Absolute Performance",
        "shortDescription": "Hot Water Generation Systems are designed to provide rapid and energy-efficient heating of water for a variety of industrial processes. These systems are especially beneficial in industries where high-temperature water is essential for operations such as sterilization, washing, and industrial process heating. The systems employ advanced heating technologies to ensure high performance, energy efficiency, and safety. Commonly used in the food and beverage industry, pharmaceutical sectors, textile and dyeing industries, and hotels, these systems are designed to meet the specific needs of each application, ensuring the water is heated to the required temperature without unnecessary energy consumption. Built with robust materials, these systems ensure durability, safety, and long service life.",
        "sections": [
            {
                "_type": "section",
                "title": "Applications",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Food & Beverage Industry (Sterilization and Washing)",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Pharmaceutical Industry (CIP Systems)",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Textile and Dyeing Industry",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Hotels and Hospitality Sector",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Industrial Process Heating",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "And more\u2026",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Features and Benefits",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Provides rapid and energy-efficient water heating for various industrial processes.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Advanced safety features ensure safe and reliable operation.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Compact, skid-mounted design saves space and simplifies installation.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Durable, corrosion-resistant materials extend the system's service life.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Energy-efficient operation helps reduce operational costs.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Available with PLC + HMI or mini-controller-based automation and redundancy options, tailored to client needs.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Ensures precise temperature control for consistent heating performance.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Product Range",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Customizable based on client needs",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Customized Options",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Fully Automated or Semi-Automated Operation",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Energy-Efficient Heating Configurations",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            }
        ]
    },
    {
        "_type": "my_products",
        "name": "I-Dose\u00ae \u2013 Dosing System",
        "slug": {
            "_type": "slug",
            "current": "i-dose-dosing-system"
        },
        "category": {
            "_type": "reference",
            "_ref": "d2ed22bf-a33d-411d-86ab-8b32e8a8f74d"
        },
        "tagline": "Smart Dosing, Absolute Control",
        "shortDescription": "I-Dose Chemical Dosing System is a smart, compact, and IoT-enabled digital system designed to control the chemistry of cooling water. The system accurately doses specialty chemicals like scale inhibitors, corrosion inhibitors, anti-foulants, biocides, and more based on real-time measurements such as pH, flow, ORP, free chlorine, TDS, chlorine dioxide, and turbidity. This precision prevents common issues like scaling, corrosion, fouling, and biofilm growth, ensuring optimal cooling system performance. I-Dose avoids underdosing or overdosing by monitoring and controlling chemical addition with accuracy, ultimately optimizing the chemical treatment process. The system uses KPIs such as LSI (Langelier Saturation Index), RSI (Ryznar Saturation Index), and performance indicators like differential pressure across heat exchangers and cooling towers to evaluate system performance and ensure efficiency.",
        "sections": [
            {
                "_type": "section",
                "title": "Applications",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Municipal and Industrial Water Treatment",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Boiler and Cooling Tower Chemical Dosing",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Effluent Treatment Plants",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "RO and UF Systems for Scaling and Fouling Control",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "And more\u2026",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Features and Benefits",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "IoT-enabled for smart, real-time monitoring and remote control.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Precise and adjustable dosing for optimal chemical usage, minimizing waste and cost.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Ensures accurate chemical treatment based on critical water parameters.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Continuous monitoring of system performance with real-time data logging.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Reduces the risk of scaling, corrosion, fouling, and biofilm growth by ensuring proper chemical dosing.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Compact and user-friendly system design.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Offers scalability and can be integrated with existing systems.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Available with PLC + HMI or mini-controller-based automation and redundancy options tailored to client needs.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Helps maintain efficiency in cooling systems, enhancing their longevity and reducing maintenance costs.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Product Range",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "1 \u2013 1000+ L/h",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Customized Options",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Automated, Real-Time Monitoring",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Integration with Plant Control Systems",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Customizable Chemical Application",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            }
        ]
    },
    {
        "_type": "my_products",
        "name": "Genox\u00ae Smart Digital Chlorine Dioxide Generator",
        "slug": {
            "_type": "slug",
            "current": "genox-smart-digital-chlorine-dioxide-generator"
        },
        "category": {
            "_type": "reference",
            "_ref": "d2ed22bf-a33d-411d-86ab-8b32e8a8f74d"
        },
        "tagline": "GENOX\u00ae \u2013 Smart Digital Chlorine Dioxide Generators: Safe, Reliable, Easy to Install, Configure, Operate, and Monitor!",
        "shortDescription": "Ionic's Chlorine Dioxide Generator is a cutting-edge, fully automated system designed to produce chlorine dioxide (ClO\u2082) on-site, ensuring safe and efficient disinfection. With a disinfection power 2.5 times greater than free chlorine, ClO\u2082 remains effective across a wide pH range, making it ideal for applications in potable water treatment, food processing, and wastewater management. The system utilizes sodium chlorite (NaClO\u2082) and hydrochloric acid (HCl) as precursor chemicals to generate ClO\u2082 with minimal by-products, ensuring environmental compliance. The advanced automation guarantees precise dosing and residual control, addressing challenges such as off-gassing, fluctuating chemical demands, and concentration variations. For large-capacity requirements, Ionic provides comprehensive turnkey project solutions and expert consultancy to optimize ClO\u2082 generation and its application in various industries.",
        "sections": [
            {
                "_type": "section",
                "title": "Applications",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Potable Water Treatment",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Cooling Tower Disinfection",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Food & Beverage Processing",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Pharmaceutical and CIP Systems",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Wastewater Treatment",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "And more\u2026",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Features and Benefits",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "IoT-enabled with PLC+HMI for real-time monitoring and control, ensuring efficient and remote management based on client requirements.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Safety interlocks and alarms for secure operation, minimizing operational risks.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Corrosion-resistant materials such as SS316 and UPVC, offering extended durability and lifespan.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Optimized chemical utilization for cost savings, reducing overall operational expenses.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Customizable capacities for various disinfection needs, providing flexibility across different industries.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Low maintenance and operational costs, reducing downtime and ensuring continuous operation.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Product Range",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "0.5 \u2013 200+ Kg/h ClO\u2082",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Customized Options",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Adjustable Dosing Range",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Remote Control and Monitoring",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Tailored Output for Specific Water Chemistry",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            }
        ]
    },
    {
        "_type": "my_products",
        "name": "Polymix\u00ae - Poly-electrolyte Solution Preparation and Dosing System",
        "slug": {
            "_type": "slug",
            "current": "polymix-poly-electrolyte-dosing-system"
        },
        "category": {
            "_type": "reference",
            "_ref": "d2ed22bf-a33d-411d-86ab-8b32e8a8f74d"
        },
        "tagline": "Perfectly Mixed, Perfectly Dosed: The Clear Choice",
        "shortDescription": "The Polymix Dosing System is a versatile and efficient manual/automatic continuous or batch-type preparation system designed to handle poly-electrolytes. It is specifically engineered to dissolve synthetic polymers for creating polymer solutions used in flocculation processes. This system serves as a key dissolving station, making it highly suitable for various industries such as water and wastewater treatment, paper manufacturing, mining, and the metals industry. The Polymix system ensures optimal dosing accuracy and consistency, improving the efficiency of chemical utilization and the effectiveness of treatment processes.",
        "sections": [
            {
                "_type": "section",
                "title": "Applications",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Water and wastewater treatment plants",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Flocculation and coagulation processes",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Industrial effluent treatment systems",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Municipal water supply treatment",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Paper and pulp industries",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "And more\u2026",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Features and Benefits",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Precise and consistent dosing for efficient chemical utilization.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Skid-mounted, compact design for easy installation and maintenance.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Compatible with a wide range of polymers and chemicals.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Low chemical consumption, optimizing operational costs.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Robust and corrosion-resistant components for long service life.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "PLC + HMI or mini-controller-based automation and redundancy options are available based on client requirements.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Product Range",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "1 \u2013 1000+ L/h",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Customized Options",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Multi-Channel Dosing",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Remote Monitoring Systems",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Integration with Existing Control Systems",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            }
        ]
    },
    {
        "_type": "my_products",
        "name": "Lamella Clarifier",
        "slug": {
            "_type": "slug",
            "current": "lamella-clarifier"
        },
        "category": {
            "_type": "reference",
            "_ref": "d2ed22bf-a33d-411d-86ab-8b32e8a8f74d"
        },
        "tagline": "Small in size, Big In performance",
        "shortDescription": "The Ionic Lamella Clarifier is a high-performance solution for solids removal and water clarification in large-scale water treatment systems. Utilizing inclined, overlapping plates, the system creates laminar flow conditions, ensuring hydraulic uniformity and the production of high-quality effluent. Designed to save space, the Lamella Clarifier significantly reduces the footprint required compared to traditional clarification equipment, making it ideal for industries and municipalities with limited installation space.",
        "sections": [
            {
                "_type": "section",
                "title": "Applications",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Municipal Water Treatment",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Industrial Effluent Treatment",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Mining and Metallurgical Industry",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Oil & Gas Industry",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Wastewater Treatment Plants",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "And more\u2026",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Features and Benefits",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Maximizes sedimentation efficiency with inclined, overlapping plates.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Space-saving design ideal for limited installation areas.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Modular and customizable to meet specific requirements.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Reduces operational costs through efficient performance.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Versatile for easy installation and relocation.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Provides high-quality effluent for improved compliance.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Product Range",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "10 \u2013 500+ m\u00b3/h",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Customized Options",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Customizable Plate Angles",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Tailored Sedimentation Chambers",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Compact or High-Capacity Designs",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            }
        ]
    },
    {
        "_type": "my_products",
        "name": "Auto-Water Softener",
        "slug": {
            "_type": "slug",
            "current": "auto-water-softener"
        },
        "category": {
            "_type": "reference",
            "_ref": "d2ed22bf-a33d-411d-86ab-8b32e8a8f74d"
        },
        "tagline": "Efficient Solutions for Scale-Free Water and Long-Lasting Equipment",
        "shortDescription": "Water is essential to industrial operations, but hard water, rich in calcium and magnesium, creates significant challenges like scaling, reduced equipment efficiency, and higher maintenance costs. Our Water Softeners provide a reliable solution by removing hardness-causing ions, ensuring soft water that enhances efficiency, protects equipment, and lowers operational costs.",
        "sections": [
            {
                "_type": "section",
                "title": "Applications",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Power Plants: Prevents scale in boilers.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Pharmaceuticals: Ensures high-quality water.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Food & Beverage: Improves product consistency.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Textiles: Avoids scale in machinery.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Healthcare: Soft water for laundry and sterilization.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Hotels: Protects water systems and appliances.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "And More\u2026",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Features and Benefits",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Automatic Regeneration: No manual intervention required.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Energy-Saving Design: Optimized for low energy consumption.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Customizable Capacities: From 1 m\u00b3/hr to hundreds of m\u00b3/hr.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "High-Grade Ion Exchange Resin: Ensures longevity and consistent performance.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Corrosion-Resistant Materials: Designed for durability in tough industrial environments.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Compact Footprint: Saves space in plant layouts.",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Product Range",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "1 \u2013 500+ m\u00b3/h",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            },
            {
                "_type": "section",
                "title": "Customized Options",
                "content": [
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "High-Flow Systems",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Multi-Phase Separation",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    },
                    {
                        "_type": "block",
                        "style": "normal",
                        "listItem": "bullet",
                        "markDefs": [],
                        "children": [
                            {
                                "marks": [],
                                "text": "Modular Skid-Mounted Units",
                                "_type": "span"
                            }
                        ],
                        "level": 1
                    }
                ]
            }
        ]
    }
]

// Bulk upload with a transaction
const uploadBulk = async () => {
    const transaction = client.transaction();

    products.forEach((product) => {
        transaction.create(product);
    });

    try {
        const result = await transaction.commit();
        console.log('All products uploaded:', result);
    } catch (error) {
        console.error('Failed to upload products:', error.message);
    }
};

uploadBulk();

