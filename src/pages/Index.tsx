import heroImage from "@/assets/dnd-hero.jpg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Scroll,
  Swords,
  Calendar,
  Feather,
  Users,
  Mail,
  Dice6,
  Shield,
  Sparkles,
  MapPin,
  ChevronDown,
  Globe,
  Twitter,
  Linkedin,
} from "lucide-react";
import { useState } from "react";

const workshopUrl = "https://keeping-it-real-chi-27.github.io";
const contactEmail = "jack.burnett@bristol.ac.uk";

const nav = [
  { id: "overview", label: "Overview" },
  { id: "objectives", label: "Objectives" },
  { id: "schedule", label: "Schedule" },
  { id: "cfp", label: "Call for Participation" },
  { id: "organisers", label: "Organisers" },
  { id: "contact", label: "Contact" },
];

const objectives = [
  {
    icon: Sparkles,
    title: "Map Authenticity",
    desc: "Develop a shared vocabulary and conceptual map of how authenticity is understood in LLM-driven NPCs.",
  },
  {
    icon: Scroll,
    title: "Compare Perspectives",
    desc: "Examine how players, designers, developers, and researchers negotiate what a character should be authentic to.",
  },
  {
    icon: Swords,
    title: "Surface Tensions",
    desc: "Identify where authored intent, player expectations, character coherence, cultural context, and model behaviour align or conflict.",
  },
  {
    icon: Shield,
    title: "Design Responses",
    desc: "Explore strategies, trade-offs, and open questions for designing with authenticity and productive inauthenticity.",
  },
];

const schedule = [
  {
    time: "Session 1",
    title: "Mapping and Negotiating Authenticity",
    desc: "Participants will discuss perspectives from accepted position papers, interact with LLM-driven NPC experiences, document moments that feel authentic or inauthentic, and revise a preliminary conceptual map of authenticity.",
  },
  {
    time: "Break",
    title: "Optional Peer Feedback and Playtesting",
    desc: "Participants may share and play-test AI-native games or character experiences, adding further examples to carry into the second session.",
  },
  {
    time: "Session 2",
    title: "Designing with Authenticity Tensions",
    desc: "Small groups will select a tension from the conceptual map, develop a design response, challenge one another's interventions through walkthroughs and prompting, and consolidate design strategies and trade-offs.",
  },
  {
    time: "Close",
    title: "Shared Outputs",
    desc: "The workshop will close by consolidating two outputs: a shared vocabulary and conceptual map, and a collection of design tensions, possible responses, points of breakdown, and opportunities for designing with inauthenticity.",
  },
];

const topics = [
  "Character coherence and intentionality",
  "Player expectations, authorship, and agency",
  "Memory, prompting, guardrails, and system architecture",
  "Cultural or historical representation and representational harm",
  "Realism, believability, immersion, and player experience",
  "Seamful, playful, or deliberately inauthentic character design",
];

const organisers = [
  {
    name: "Jack Burnett",
    role: "Interactive AI and Games Researcher",
    affiliation: "University of Bristol",
    bio: "Jack is a PhD researcher in Interactive AI at the University of Bristol. His research examines co-design and customisation in games, particularly how human-in-the-loop AI can support accessible interface design, contributing perspectives on player agency, ownership, and participatory approaches to game technology.",
    links: [
      { type: "website", url: "https://jackjburnett.github.io/" },
      { type: "linkedin", url: "https://www.linkedin.com/in/jackjburnett/" },
    ],
  },
  {
    name: "Vishal Joshi",
    role: "Generative AI and Narrative Co-Creation Researcher",
    affiliation: "University of Bristol",
    bio: "Vishal is a PhD researcher in Interactive AI at the University of Bristol whose work examines generative AI for narrative co-creation in tabletop role-playing games. His research on LLM-based player agents focuses on collaboration, narrative context, and creative interaction between human and artificial players.",
    links: [
      { type: "website", url: "https://biglab.co.uk/member/vishal-joshi/" },
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/vishal-joshi-4a26151b6/",
      },
    ],
  },
  {
    name: "Timothy Holland",
    role: "Digital Ethics and Games Researcher",
    affiliation: "University of Bristol",
    bio: "Timothy is a PhD researcher at the University of Bristol working at the intersection of digital ethics, artificial intelligence, and games. His research examines the ethical implications of AI-mediated game systems, including how players understand and respond to automated decisions, fairness, and explainability.",
    links: [
      { type: "website", url: "https://biglab.co.uk/member/tim-holland/" },
      { type: "linkedin", url: "https://www.linkedin.com/in/timmy-holland/" },
    ],
  },
  {
    name: "Lu Han",
    role: "Affective AI and Historical Games Researcher",
    affiliation: "University of Bristol",
    bio: "Lu is a PhD researcher at the University of Bristol with a background in computer science and media production. Her research explores affective AI in historical games, particularly how emotionally responsive NPCs can support historical thinking, emotional engagement, and historical empathy.",
    links: [
      { type: "website", url: "https://biglab.co.uk/member/lu-han/" },
      {
        type: "linkedin",
        url: "https://www.linkedin.com/in/lu-han-17a198391/",
      },
    ],
  },
  {
    name: "Richard Cole",
    role: "Digital Futures and Games Researcher",
    affiliation: "University of Bristol",
    bio: "Richard is a Senior Lecturer in Digital Futures and co-Director of the Bristol Digital Game Lab at the University of Bristol. His interdisciplinary research examines games, virtual reality, and artificial intelligence as forms of humanistic inquiry, including historical representation and generative AI-driven game characters.",
    links: [],
  },
  {
    name: "Chris Bevan",
    role: "HCI and Player Experience Researcher",
    affiliation: "University of Bristol",
    bio: "Chris is a Lecturer in Computer Science at the University of Bristol whose HCI research focuses on immersive technologies and player experience. His recent work includes industry-facing research on generative-AI-driven game characters and large-scale studies of how players interact with and respond to AI-native games.",
    links: [],
  },
  {
    name: "Elisa D. Mekler",
    role: "Player Experience and HCI Theory Researcher",
    affiliation: "IT University of Copenhagen",
    bio: "Elisa is an Associate Professor at the IT University of Copenhagen's Center for Digital Play. Her research examines motivational and emotional aspects of player experience, game design, and HCI theory, contributing expertise on how affect, enjoyment, and meaningful experience are translated into design practice.",
    links: [],
  },
  {
    name: "Zijian \"Jason\" Ding",
    role: "Human-Centred AI Researcher",
    affiliation: "University of Maryland College Park",
    bio: "Zijian is a researcher in Human-Centred AI whose work examines how generative AI systems understand, negotiate, and respond to human intent. His research on human-AI interaction and co-creation contributes perspectives on how intentions and system behaviour are negotiated and aligned in open-ended interaction.",
    links: [],
  },
  {
    name: "Sebastian Deterding",
    role: "Design Engineering and Gameful Interaction Researcher",
    affiliation: "Imperial College London",
    bio: "Sebastian is Chair in Design Engineering at Imperial College London. His research spans motivational design, games and playful design, behavioural science, and computational and design methods, bringing expertise in gameful interaction and in translating theories of human motivation into interactive-system design.",
    links: [],
  },
  {
    name: "Yun-Gyung Cheong",
    role: "Game AI and Computational Storytelling Researcher",
    affiliation: "Sungkyunkwan University",
    bio: "Yun-Gyung is a Professor of Artificial Intelligence at Sungkyunkwan University whose research focuses on game AI, computational storytelling, story generation, AI planning, and natural language processing. Her work contributes longstanding expertise in computational models of narrative, character behaviour, and interactive storytelling.",
    links: [],
  },
  {
    name: "Daniel Bennett",
    role: "Player Experience and Interaction Theory Researcher",
    affiliation: "Aalborg University",
    bio: "Daniel is an Assistant Professor at Aalborg University whose HCI research examines agency, autonomy, motivation, player experience, and interaction theory. His games research includes work on jank and the value players find in broken or imperfect game experiences, providing a perspective on productive inauthenticity.",
    links: [],
  },
];

const linkIcon = (type: string) => {
  if (type === "twitter") return Twitter;
  if (type === "linkedin") return Linkedin;
  return Globe;
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <nav className="container flex items-center justify-between h-16">
          <a
            href="#top"
            className="flex items-center gap-2 font-display font-bold text-lg"
          >
            <img
              src="/icon.svg"
              alt="Keepin' It Real icon"
              className="h-5 w-5 animate-flicker"
            />
            <span className="text-gradient-gold">Keepin' It Real</span>
          </a>
          <ul className="hidden md:flex items-center gap-6 text-sm">
            {nav.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className="text-muted-foreground hover:text-accent transition-smooth"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            asChild
            size="sm"
            className="bg-gradient-ember shadow-ember hover:opacity-90"
          >
            <a href="#cfp">Submit</a>
          </Button>
        </nav>
      </header>

      <section
        id="top"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        <img
          src={heroImage}
          alt="Ancient parchment, dragon emblem, candles and dice on a wooden table"
          width={1920}
          height={1024}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

        <div className="container relative z-10 text-center max-w-4xl animate-fade-up">
          <div className="flex flex-col items-center mb-6">
            <img
              src="/icon.svg"
              alt="Keepin' It Real icon"
              className="w-24 h-24 md:w-32 md:h-32 mb-4 animate-flicker"
            />

            <p className="text-accent text-sm tracking-[0.4em] uppercase">
              A CHI 2027 Workshop
            </p>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            <span className="block text-gradient-ember">Keepin' It Real</span>
            <span className="block text-foreground/90 text-3xl md:text-5xl mt-4 font-normal italic">
              Authenticity in LLM-driven NPCs
            </span>
          </h1>
          <div className="divider-rune">
            <Dice6 className="h-5 w-5 text-accent animate-flicker" />
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A workshop on what authenticity means for LLM-driven non-player
            characters, how it is negotiated across stakeholders and systems,
            and how those understandings can inform design.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-ember shadow-ember hover:opacity-90 font-display tracking-wide"
            >
              <a href="#cfp">Answer the Call</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-accent/60 text-accent hover:bg-accent/10 font-display tracking-wide"
            >
              <a href="#schedule">View the Schedule</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="overview" className="py-24 container">
        <SectionHeader icon={Scroll} eyebrow="Chapter I" title="Overview" />
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="md:col-span-2 p-8 bg-gradient-parchment border-border/60 shadow-deep-card">
            <p className="text-lg leading-relaxed text-foreground/90 mb-4">
              <span className="font-display text-accent text-2xl">L</span>
              arge Language Models offer real promise in game design, enabling
              NPCs to engage in open, improvised dialogue and behaviour. Yet
              they also complicate the challenge of creating characters that
              feel authentic.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This workshop brings together researchers, developers, designers,
              practitioners, and players to examine what authenticity means in
              the context of LLM-driven NPCs, how it is negotiated across
              stakeholders and systems, and how these understandings can inform
              future design.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through position papers, hands-on interaction with LLM-driven
              NPCs, collaborative mapping, and design activities, participants
              will develop a shared vocabulary and conceptual map alongside
              design tensions, strategies, and open questions.
            </p>
          </Card>
          <div className="space-y-4">
            {[
              { icon: Calendar, label: "Conference", value: "May 10-14, 2027" },
              { icon: MapPin, label: "Venue", value: "Pittsburgh, USA" },
              { icon: Users, label: "Capacity", value: "Approx. 25" },
            ].map((item) => (
              <Card
                key={item.label}
                className="p-5 bg-card/60 border-border/60 flex items-start gap-4"
              >
                <div className="h-10 w-10 rounded-md bg-gradient-ember flex items-center justify-center shadow-ember shrink-0">
                  <item.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="font-display text-lg text-foreground">
                    {item.value}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="objectives"
        className="py-24 bg-card/30 border-y border-border/40"
      >
        <div className="container">
          <SectionHeader
            icon={Swords}
            eyebrow="Chapter II"
            title="Workshop Objectives"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {objectives.map((g) => (
              <Card
                key={g.title}
                className="group p-6 bg-gradient-parchment border-border/60 hover:border-accent/60 transition-smooth hover:-translate-y-1 hover:shadow-ember"
              >
                <div className="h-12 w-12 rounded-md bg-gradient-ember flex items-center justify-center shadow-ember mb-5 group-hover:animate-flicker">
                  <g.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl text-accent mb-2">
                  {g.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {g.desc}
                </p>
              </Card>
            ))}
          </div>
          <div className="max-w-4xl mx-auto mt-10 text-center text-muted-foreground leading-relaxed">
            The workshop asks two questions: what does authenticity mean, and
            how is it negotiated, in the context of LLM-driven NPCs? How can
            understandings of authenticity inform the design of LLM-driven NPCs?
          </div>
        </div>
      </section>

      <section id="schedule" className="py-24 container">
        <SectionHeader icon={Calendar} eyebrow="Chapter III" title="Schedule" />
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-[88px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent hidden sm:block" />
          <div className="space-y-4">
            {schedule.map((s) => (
              <div
                key={s.time}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 group"
              >
                <div className="sm:w-20 shrink-0 text-right">
                  <span className="font-display text-accent text-lg">
                    {s.time}
                  </span>
                </div>
                <div className="hidden sm:flex flex-col items-center pt-2">
                  <div className="h-3 w-3 rounded-full bg-primary shadow-ember group-hover:animate-flicker" />
                </div>
                <Card className="flex-1 p-5 bg-card/60 border-border/60 hover:border-accent/60 transition-smooth">
                  <h3 className="font-display text-lg text-foreground mb-1">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </Card>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            The workshop will run as two consecutive 90-minute sessions.
            Workshop date and room will be confirmed by CHI 2027.
          </p>
        </div>
      </section>

      <section id="cfp" className="py-24 bg-card/30 border-y border-border/40">
        <div className="container max-w-5xl">
          <SectionHeader
            icon={Feather}
            eyebrow="Chapter IV"
            title="Call for Participation"
          />
          <Card className="p-8 md:p-12 bg-gradient-parchment border-border/60 shadow-deep-card">
            <p className="text-lg text-foreground/90 leading-relaxed mb-5">
              We invite 500-word position papers for "Keepin' it Real:
              Authenticity in LLM-driven NPCs", a CHI 2027 workshop examining
              what authenticity means for LLM-driven non-player characters, how
              it is negotiated, and how different understandings can inform
              design.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Position papers may take the form of opinion pieces,
              autoethnographies, reflective accounts, literature reviews,
              theoretical perspectives, design critiques, case analyses, or
              practitioner reflections. Original research is not required.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-display text-xl text-accent mb-3">
                  Topics of Interest
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {topics.map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="text-accent mt-1">*</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-xl text-accent mb-3">
                  Participation
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <span className="text-foreground">Format:</span> Two
                    consecutive CHI 2027 workshop sessions
                  </li>
                  <li>
                    <span className="text-foreground">Participants:</span>{" "}
                    Approximately 25
                  </li>
                  <li>
                    <span className="text-foreground">Selection:</span>{" "}
                    Relevance and distinctive or complementary perspective
                  </li>
                  <li>
                    <span className="text-foreground">Outputs:</span> Website
                    papers, shared map, and possible edited publication
                  </li>
                </ul>
              </div>
            </div>
            <div className="divider-rune">
              <Feather className="h-4 w-4 text-accent" />
            </div>
            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-ember shadow-ember hover:opacity-90 font-display tracking-wide"
              >
                <a href={workshopUrl}>Submission Instructions</a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section id="organisers" className="py-24 container">
        <SectionHeader icon={Users} eyebrow="Chapter V" title="Organisers" />
        <div className="max-w-5xl mx-auto text-center text-muted-foreground leading-relaxed mb-10">
          The organising team brings together expertise across games and HCI,
          human-AI interaction, generative and narrative AI, player experience,
          game design, AI ethics, affective interaction, and historical and
          cultural representation.
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {organisers.map((o) => (
            <OrganiserCard key={o.name} organiser={o} />
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="py-24 bg-card/30 border-t border-border/40"
      >
        <div className="container max-w-3xl text-center">
          <SectionHeader icon={Mail} eyebrow="Chapter VI" title="Contact" />
          <Card className="p-10 bg-gradient-parchment border-border/60 shadow-deep-card">
            <p className="text-muted-foreground mb-6">
              For questions about the workshop, contact:
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="font-display text-2xl md:text-3xl text-gradient-gold hover:opacity-80 transition-smooth inline-block"
            >
              {contactEmail}
            </a>
            <div className="divider-rune">
              <img src="/icon.svg" alt="Rune icon" className="h-4 w-4" />
            </div>
            <p className="text-sm text-muted-foreground">
              Keepin' It Real - CHI 2027 - Pittsburgh, USA
            </p>
          </Card>
        </div>
      </section>

      <footer className="py-8 border-t border-border/40 text-center text-xs text-muted-foreground">
        Copyright Keepin' It Real - CHI 2027.
      </footer>
    </div>
  );
};

const SectionHeader = ({
  icon: Icon,
  eyebrow,
  title,
}: {
  icon: React.ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
}) => (
  <div className="text-center mb-14">
    <p className="text-accent text-xs tracking-[0.4em] uppercase mb-3">
      {eyebrow}
    </p>
    <div className="flex items-center justify-center gap-3 mb-2">
      <span className="h-px w-12 bg-accent/40" />
      <Icon className="h-6 w-6 text-primary" />
      <span className="h-px w-12 bg-accent/40" />
    </div>
    <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold">
      {title}
    </h2>
  </div>
);

type Organiser = (typeof organisers)[number];

const OrganiserCard = ({ organiser }: { organiser: Organiser }) => {
  const [open, setOpen] = useState(false);
  return (
    <Card className="p-6 bg-gradient-parchment border-border/60 hover:border-accent/60 transition-smooth">
      <div className="flex items-start gap-4">
        <div className="h-16 w-16 shrink-0 rounded-full bg-gradient-ember flex items-center justify-center shadow-ember font-display text-xl text-primary-foreground">
          {organiser.name
            .replace(/"/g, "")
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-lg text-foreground">
            {organiser.name}
          </h3>
          <p className="text-accent text-sm">{organiser.role}</p>
          <p className="text-muted-foreground text-xs mt-1 italic">
            {organiser.affiliation}
          </p>
        </div>
      </div>
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
          <div className="pt-4 mt-4 border-t border-border/60">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {organiser.bio}
            </p>
            {organiser.links.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-4">
                {organiser.links.map((l) => {
                  const Icon = linkIcon(l.type);
                  return (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${organiser.name} on ${l.type}`}
                      className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-primary transition-smooth"
                    >
                      <Icon className="h-3.5 w-3.5" />
                      <span className="capitalize">{l.type}</span>
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </CollapsibleContent>
        <CollapsibleTrigger asChild>
          <button className="mt-4 w-full inline-flex items-center justify-center gap-2 text-xs font-display tracking-widest uppercase text-accent/80 hover:text-accent transition-smooth">
            {open ? "Hide bio" : "Read bio"}
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>
        </CollapsibleTrigger>
      </Collapsible>
    </Card>
  );
};

export default Index;
