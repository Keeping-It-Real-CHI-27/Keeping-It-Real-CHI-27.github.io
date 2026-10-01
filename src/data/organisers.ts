export interface Organiser {
  name: string;
  image?: string;
  role: string;
  affiliation: string;
  email: string;
  bio: string;
  links?: {
    linkedin?: string;
    orcid?: string;
    scholar?: string;
    website?: string;
  };
}

export const organisers: Organiser[] = [
  {
    name: "Jack Burnett",
    role: "Interactive AI and Games Researcher",
    affiliation: "University of Bristol",
    email: "jack.burnett@bristol.ac.uk",
    bio: "Jack is a PhD researcher in Interactive AI at the University of Bristol. His research examines co-design and customisation in games, particularly how human-in-the-loop AI can support accessible interface design, contributing perspectives on player agency, ownership, and participatory approaches to game technology.",
    links: {
      linkedin: "https://www.linkedin.com/in/jackjburnett/",
      orcid: "https://orcid.org/0000-0001-8472-6121",
      website: "https://jackjburnett.github.io/",
      scholar: "https://scholar.google.com/citations?user=gNer1EkAAAAJ&hl=en",
    },
  },
  {
    name: "Vishal Joshi",
    role: "Generative AI and Group Work Researcher",
    affiliation: "University of Bristol",
    email: "we19383@bristol.ac.uk",
    bio: "Vishal is a PhD researcher in Interactive AI at the University of Bristol whose work examines generative AI for group work in tabletop role-playing games. His research on LLM-based player agents focuses on instantiating and testing the capabilities of LLM agents to conduct articulation work.",
    links: {
      linkedin: "https://www.linkedin.com/in/vishal-joshi-4a26151b6/",
      orcid: "https://orcid.org/0009-0001-9716-409X",
      website: "https://biglab.co.uk/member/vishal-joshi/",
    },
  },
  {
    name: "Timothy Holland",
    role: "Digital Ethics and Games Researcher",
    affiliation: "University of Bristol",
    email: "tim.holland@bristol.ac.uk",
    bio: "Timothy is a PhD researcher at the University of Bristol working at the intersection of digital ethics, artificial intelligence, and games. His research examines the ethical implications of AI-mediated game systems, including how players understand and respond to automated decisions, fairness, and explainability.",
    links: {
      linkedin: "https://www.linkedin.com/in/timmy-holland/",
      orcid: "https://orcid.org/0009-0004-6809-2738",
      website: "https://biglab.co.uk/member/tim-holland/",
      scholar: "https://scholar.google.com/citations?hl=en&user=js5NCd4AAAAJ"
    },
  },
  {
    name: "Lu Han",
    role: "Affective AI and Historical Games Researcher",
    affiliation: "University of Bristol",
    email: "lu.han@bristol.ac.uk",
    bio: "Lu is a PhD researcher at the University of Bristol with a background in computer science and media production. Her research explores affective AI in historical games, particularly how emotionally responsive NPCs can support historical thinking, emotional engagement, and historical empathy.",
    links: {
      linkedin: "https://www.linkedin.com/in/lu-han-17a198391/",
      orcid: "https://orcid.org/0009-0004-9020-1419",
      website: "https://biglab.co.uk/member/lu-han/",
    },
  },
  {
    name: "Emma Jane Pretty",
    role: "NPC and Adaptive Games Researcher",
    affiliation: "Tampere University",
    email: "emma.pretty@tuni.fi",
    bio: "Emma is a Post-Doctoral Researcher in the Gamification Group at Tampere University's Research Centre of Gameful Realities. Drawing on psychology, cognitive neuroscience, and HCI, her research examines non-player characters, adaptive and personalised gaming experiences, and embodiment in virtual and mixed-reality environments.",
    links: {
      orcid: "https://orcid.org/0000-0002-5108-5740",
      scholar: "https://scholar.google.com/citations?user=LPP8dHwAAAAJ&hl=en",
      website: "https://webpages.tuni.fi/gamification/members/emma-pretty/",
    },
  },
  {
    name: 'Zijian "Jason" Ding',
    role: "Human-Centred AI Researcher",
    affiliation: "University of Maryland College Park",
    email: "ding@umd.edu",
    bio: "Zijian is a researcher in Human-Centred AI whose work examines how generative AI systems understand, negotiate, and respond to human intent. His research on human-AI interaction and co-creation contributes perspectives on how intentions and system behaviour are negotiated and aligned in open-ended interaction.",
    links: {
      orcid: "https://orcid.org/0000-0002-6372-0369",
      website: "https://jason-ding.com/",
      scholar: "https://scholar.google.com/citations?hl=en&user=nHgFeKcAAAAJ",
      linkedin: "https://www.linkedin.com/in/zijian-ding/",
    },
  },
  {
    name: "Elisa D. Mekler",
    role: "Player Experience and HCI Theory Researcher",
    affiliation: "IT University of Copenhagen",
    email: "elme@itu.dk",
    bio: "Elisa is an Associate Professor at the IT University of Copenhagen. Her research examines motivational, emotional, and meaningful aspects of player experience, game design, and HCI theory. She contributes expertise on sources of meaning in game play, and how theories of meaning and authenticity might be translated into design practice.",
    links: {
      orcid: "https://orcid.org/0000-0003-0076-6703",
      scholar: "https://scholar.google.com/citations?user=9j30OywAAAAJ&hl=de",
      website: "https://researcher.itu.dk/p/en/persons/elisa-mekler"
    },
  },
  {
    name: "Chris Bevan",
    role: "HCI and Player Experience Researcher",
    affiliation: "University of Bristol",
    email: "chris.bevan@bristol.ac.uk",
    bio: "Chris is a Lecturer in Computer Science at the University of Bristol whose HCI research focuses on immersive technologies and player experience. His recent work includes industry-facing research on generative-AI-driven game characters and large-scale studies of how players interact with and respond to AI-native games.",
    links: {
      orcid: "https://orcid.org/0000-0002-2823-420X",
      website: "https://www.chrisbevan.co.uk/",
      scholar: "https://scholar.google.com/citations?user=oeU9peMAAAAJ&hl=en"
    },
  },
  {
    name: "Yun-Gyung Cheong",
    role: "Game AI and Computational Storytelling Researcher",
    affiliation: "Sungkyunkwan University",
    email: "aimecca@skku.edu",
    bio: "Yun-Gyung is a Professor of Artificial Intelligence at Sungkyunkwan University whose research focuses on game AI, computational storytelling, story generation, AI planning, and natural language processing. Her work contributes longstanding expertise in computational models of narrative, character behaviour, and interactive storytelling.",
    links: {
      orcid: "https://orcid.org/0000-0001-6329-8439",
      scholar: "https://scholar.google.com/citations?user=yhfGHeIAAAAJ&hl=en"
    },
  },
  {
    name: "Younbo Jung",
    role: "Interactive Media and Virtual Characters Researcher",
    affiliation: "Nanyang Technological University",
    email: "YBJung@ntu.edu.sg",
    bio: "Younbo is an Associate Professor at Nanyang Technological University whose research examines interactive media, virtual characters, and human-computer interaction. His work contributes perspectives on perceived authenticity and users' responses to AI-driven characters.",
    links: {
      orcid: "https://orcid.org/0000-0002-2588-4557",
    },
  },
  {
    name: "Dan Bennett",
    role: "Player Experience and Interaction Theory Researcher",
    affiliation: "Aalborg University",
    email: "dtbe@cs.aau.dk",
    bio: "Daniel is an Assistant Professor at Aalborg University examining user agency, autonomy and motivation. His research includes work on jank and the value players find in broken or imperfect game experiences, providing a perspective on how imperfections can give rise to authenticity and how inauthenticity might be valued and productive.",
    links: {
      orcid: "https://orcid.org/0000-0002-9330-5529",
      linkedin: "https://www.linkedin.com/in/daniel-bennett1981/",
      scholar: "https://scholar.google.com/citations?user=KxrABMIAAAAJ&hl=en",
      website: "https://danbennettdev.github.io/"
    },
  },
  {
    name: "Sebastian Deterding",
    role: "Design Engineering and Gameful Interaction Researcher",
    affiliation: "Imperial College London",
    email: "s.deterding@imperial.ac.uk",
    bio: "Sebastian is Chair in Design Engineering at Imperial College London. His research spans motivational design, games and playful design, behavioural science, and computational and design methods, bringing expertise in gameful interaction and in translating theories of human motivation into interactive-system design.",
    links: {
      orcid: "https://orcid.org/0000-0003-0033-2104",
      scholar: "https://scholar.google.com/citations?user=BvHFgSwAAAAJ&hl=en",
      website: "https://codingconduct.cc/"
    },
  },
  {
    name: "Richard Cole",
    role: "Digital Futures and Games Researcher",
    affiliation: "University of Bristol",
    email: "richard.cole@bristol.ac.uk",
    bio: "Richard is a Senior Lecturer in Digital Futures and co-Director of the Bristol Digital Game Lab at the University of Bristol. He has led research across multiple collaborative R&D projects with industry partner Meaning Machine on the design, development, and player response to advanced AI NPCs in games.",
    links: {
      orcid: "https://orcid.org/0000-0002-4140-6539",
      linkedin: "https://www.linkedin.com/in/richardcolegamingaudiences/",
      scholar: "https://scholar.google.com/citations?user=XGVPtGUAAAAJ&hl=en"
    },
  },
];
