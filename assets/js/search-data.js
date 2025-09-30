// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-vitae",
          title: "vitae",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/vitae/";
          },
        },{id: "nav-code",
          title: "code",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-contact",
          title: "contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-am-now-officially-a-phd-holder-my-italian-viva-went-well",
          title: 'I am now officially a PhD holder! My Italian viva went well!',
          description: "",
          section: "News",},{id: "news-very-excited-to-start-my-postdoc-today-at-aix-marseille-university-i-will-work-with-alain-barrat-bianca-habermann-and-laurent-tichit-on-higher-order-network-models-in-biology",
          title: 'Very excited to start my postdoc today at Aix-Marseille University! I will work...',
          description: "",
          section: "News",},{id: "news-new-preprint-a-multi-order-laplacian-framework-for-the-stability-of-higher-order-synchronization-available-at-arxiv-2003-09734",
          title: 'New preprint “A multi-order Laplacian framework for the stability of higher-order synchronization”, available...',
          description: "",
          section: "News",},{id: "news-new-adventure-today-i-m-starting-another-postdoc-with-giovanni-petri-at-isi-foundation-in-turin-italy",
          title: 'New adventure: today, I’m starting another postdoc with Giovanni Petri at ISI Foundation...',
          description: "",
          section: "News",},{id: "news-new-paper-stabilization-of-cyclic-processes-by-slowly-varying-forcing-available-in-chaos",
          title: 'New paper “Stabilization of cyclic processes by slowly varying forcing”, available in Chaos!...',
          description: "",
          section: "News",},{id: "news-new-preprint-do-higher-order-interactions-promote-synchronization-available-at-arxiv-2203-03060",
          title: 'New preprint “Do higher-order interactions promote synchronization?”, available at arXiv:2203.03060!',
          description: "",
          section: "News",},{id: "news-we-released-xgi-a-python-package-for-complex-group-interactions",
          title: 'We released XGI	! A Python package for compleX Group Interactions.',
          description: "",
          section: "News",},{id: "news-chapter-out-in-higher-order-systems",
          title: 'Chapter out in Higher-order systems!',
          description: "",
          section: "News",},{id: "news-new-preprint-simplicially-driven-simple-contagion-available-at-arxiv-2206-07645",
          title: 'New preprint “Simplicially driven simple contagion”, available at arXiv:2206.07645!',
          description: "",
          section: "News",},{id: "news-paper-out-in-cell-reports-methods",
          title: 'Paper out in Cell Reports Methods!',
          description: "",
          section: "News",},{id: "news-hypergraphs-or-simplicial-complexes-paper-out-in-nat-commun",
          title: 'Hypergraphs or simplicial complexes? Paper out in Nat. Commun.!',
          description: "",
          section: "News",},{id: "news-simplicially-driven-simple-contagion-out-in-phys-rev-res",
          title: '“Simplicially driven simple contagion” out in Phys. Rev. Res.!',
          description: "",
          section: "News",},{id: "news-short-paper-xgi-a-python-package-for-higher-order-interaction-networks-out-in-joss",
          title: 'Short paper “XGI: A Python package for higher-order interaction networks” out in JOSS....',
          description: "",
          section: "News",},{id: "news-a-unified-framework-for-simplicial-kuramoto-models-preprint-out-arxiv-2305-17977",
          title: '“A unified framework for Simplicial Kuramoto models” preprint out arXiv:2305.17977!',
          description: "",
          section: "News",},{id: "news-i-was-nominated-for-the-young-researcher-award-at-frccs",
          title: 'I was nominated for the Young Researcher Award at FRCCS!',
          description: "",
          section: "News",},{id: "news-social-learning-across-symbolic-cultural-barriers-in-non-human-cultures-preprint-out-arxiv-2307-05304",
          title: '“Social learning across symbolic cultural barriers in non-human cultures” preprint out arXiv:2307.05304!',
          description: "",
          section: "News",},{id: "news-new-preprint-deeper-but-smaller-higher-order-interactions-increase-linear-stability-but-shrink-basins-available-at-arxiv-2309-16581",
          title: 'New preprint “Deeper but smaller: Higher-order interactions increase linear stability but shrink basins”,...',
          description: "",
          section: "News",},{id: "news-short-paper-phasik-a-python-package-to-identify-system-states-in-partially-temporal-networks-out-in-joss",
          title: 'Short paper “Phasik: a Python package to identify system states in partially temporal...',
          description: "",
          section: "News",},{id: "news-new-preprint-higher-order-connectomics-of-human-brain-function-reveals-local-topological-signatures-of-task-decoding-individual-identification-and-behavior-available-at-biorxiv",
          title: 'New preprint “Higher-order connectomics of human brain function reveals local topological signatures of...',
          description: "",
          section: "News",},{id: "news-new-preprint-synergistic-signatures-of-group-mechanisms-in-higher-order-systems-available-at-arxiv",
          title: 'New preprint “Synergistic signatures of group mechanisms in higher-order systems”, available at arXiv!...',
          description: "",
          section: "News",},{id: "news-new-preprint-higher-order-laplacian-renormalization-available-at-arxiv",
          title: 'New preprint “Higher-order Laplacian Renormalization”, available at arXiv!',
          description: "",
          section: "News",},{id: "news-excited-to-kick-off-under-net-my-fnrs-project-on-underground-fungal-networks",
          title: 'Excited to kick off UNDER-NET, my FNRS project on underground fungal networks!🍄',
          description: "",
          section: "News",},{id: "news-new-preprint-functional-reducibility-of-higher-order-networks-available-at-arxiv",
          title: 'New preprint “Functional reducibility of higher-order networks”, available at arXiv!',
          description: "",
          section: "News",},{id: "news-a-unified-framework-for-simplicial-kuramoto-models-published-in-chaos",
          title: '“A unified framework for Simplicial Kuramoto models” published in Chaos!',
          description: "",
          section: "News",},{id: "news-evidence-of-social-learning-across-symbolic-cultural-barriers-in-sperm-whales-out-in-elife",
          title: '“Evidence of social learning across symbolic cultural barriers in sperm whales” out in...',
          description: "",
          section: "News",},{id: "news-on-the-benefits-of-heterogeneity-in-cognitive-stability-and-flexibility-for-collaborative-task-switching-out-in-the-proceedings-of-cogsci",
          title: '“On the Benefits of Heterogeneity in Cognitive Stability and Flexibility for Collaborative Task...',
          description: "",
          section: "News",},{id: "news-new-preprint-hamiltonian-control-to-desynchronize-kuramoto-oscillators-with-higher-order-interactions-available-at-arxiv",
          title: 'New preprint “Hamiltonian control to desynchronize Kuramoto oscillators with higher-order interactions”, available at...',
          description: "",
          section: "News",},{id: "news-deeper-but-smaller-higher-order-interactions-increase-linear-stability-but-shrink-basins-out-in-sci-adv",
          title: '“Deeper but smaller: Higher-order interactions increase linear stability but shrink basins”, out in...',
          description: "",
          section: "News",},{id: "news-topological-analysis-of-brain-dynamical-signals-indicates-signatures-of-seizure-susceptibility-available-at-arxiv",
          title: '“Topological analysis of brain dynamical signals indicates signatures of seizure susceptibility”, available at...',
          description: "",
          section: "News",},{id: "news-higher-order-laplacian-renormalization-out-in-nat-phys",
          title: '“Higher-order Laplacian renormalization”, out in Nat. Phys.!',
          description: "",
          section: "News",},{id: "news-synergistic-signatures-of-group-mechanisms-in-higher-order-systems-out-in-phys-rev-lett-featured-in-physics-and-editor-s-suggestion-see-this-commentary",
          title: '“Synergistic signatures of group mechanisms in higher-order systems”, out in Phys. Rev. Lett.,...',
          description: "",
          section: "News",},{id: "news-hamiltonian-control-to-desynchronize-kuramoto-oscillators-with-higher-order-interactions-out-in-pre",
          title: '“Hamiltonian control to desynchronize Kuramoto oscillators with higher-order interactions”, out in PRE!',
          description: "",
          section: "News",},{id: "projects-higher-order-sync",
          title: 'Higher-order sync',
          description: "sync with group interactions",
          section: "Projects",handler: () => {
              window.location.href = "/projects/HO_sync/";
            },},{id: "projects-time-varying-sync",
          title: 'Time-varying sync',
          description: "sync with time-varying parameters",
          section: "Projects",handler: () => {
              window.location.href = "/projects/TV_sync/";
            },},{id: "projects-amcos-booklet",
          title: 'AMCOS booklet',
          description: "a LaTeX template for conference booklets",
          section: "Projects",handler: () => {
              window.location.href = "/projects/amcos_booklet/";
            },},{id: "projects-biological-networks",
          title: 'Biological networks',
          description: "protein interactions in cell cycle",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bio/";
            },},{id: "projects-sperm-whales",
          title: 'Sperm whales',
          description: "deciphering sperm whale communication",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ceti/";
            },},{id: "projects-collab-net",
          title: 'collab net',
          description: "interactive visualisation of my collaboration network",
          section: "Projects",handler: () => {
              window.location.href = "/projects/collab_network/";
            },},{id: "projects-group-interactions",
          title: 'Group interactions',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/higher_order/";
            },},{id: "projects-neuroscience",
          title: 'Neuroscience',
          description: "topology of brain signals",
          section: "Projects",handler: () => {
              window.location.href = "/projects/neuroscience/";
            },},{id: "projects-phasik",
          title: 'Phasik',
          description: "the cell cycle as a temporal network",
          section: "Projects",handler: () => {
              window.location.href = "/projects/phasik/";
            },},{id: "projects-spreading-models",
          title: 'Spreading models',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/spreading/";
            },},{id: "projects-fungal-networks",
          title: 'fungal networks',
          description: "structure and growth of arbuscular mycorrhizal fungal networks",
          section: "Projects",handler: () => {
              window.location.href = "/projects/under-net/";
            },},{id: "projects-js-viz",
          title: '.js viz',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/viz_js/";
            },},{id: "projects-xgi",
          title: 'XGI',
          description: "python library for higher-order networks",
          section: "Projects",handler: () => {
              window.location.href = "/projects/xgi/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/maximelca.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%61%78%69%6D%65.%6C%75%63%61%73@%75%6E%61%6D%75%72.%62%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/maximelucas", "_blank");
        },
      },{
        id: 'social-gitlab',
        title: 'GitLab',
        section: 'Socials',
        handler: () => {
          window.open("https://gitlab.com/maximelca", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/maximelucas", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-8087-2981", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=0Wr7HGIAAAAJ", "_blank");
        },
      },];
