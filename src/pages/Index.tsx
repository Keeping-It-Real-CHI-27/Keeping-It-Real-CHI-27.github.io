import heroImage from "@/assets/dnd-hero.jpg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { organisers, type Organiser } from "@/data/organisers";
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
  MapPin,
  ChevronDown,
  Globe,
  Linkedin,
  GraduationCap,
  CircleUserRound,
} from "lucide-react";
import { useState } from "react";

const submissionUrl = "https://easychair.org/conferences/?conf=kirchi27";
const contactEmail = "jack.burnett@bristol.ac.uk";

const nav = [
  { id: "overview", label: "Overview" },
  { id: "objectives", label: "Objectives" },
  { id: "schedule", label: "Schedule" },
  { id: "cfp", label: "Call for Participation" },
  { id: "organisers", label: "Organisers" },
  { id: "contact", label: "Contact" },
];

const workshopQuestions = [
  "How is authenticity understood and negotiated in the context of LLM-driven NPCs?",
  "How can understandings of authenticity inform the design of LLM-driven NPCs?",
];

const schedule = [
  {
    title: "Session 1: Mapping and Negotiating Authenticity",
    duration: "90 minutes",
    activities: [
      {
        time: "15 min",
        title: "Introduce the conceptual map",
        desc: "The organisers introduce a preliminary map drawn from accepted position papers, along with working definitions of authenticity, believability, realism, and consistency. No prior reading is required.",
      },
      {
        time: "45 min",
        title: "Hands-on NPC exploration",
        desc: "In small groups, try commercial demos such as 1001 Nights and Dead Meat and research prototypes such as Lu Han’s The Last Dialogue. Note what feels authentic or inauthentic, whose expectations and intentions matter, and whether the result is desirable. Devices are preconfigured, with local versions or recordings available if needed.",
      },
      {
        time: "15 min",
        title: "Conceptual mapping",
        desc: "Use your observations to revise the map’s categories and language.",
      },
      {
        time: "15 min",
        title: "Compare judgements",
        desc: "Discuss why similar interactions can feel authentic to some people and inauthentic to others. Record points of agreement and disagreement on the map.",
      },
    ],
  },
  {
    title: "Optional break activity",
    desc: "Share and play-test AI-native games or character experiences, exchange informal feedback, and pick up ideas for Session 2.",
  },
  {
    title: "Session 2: Designing with Authenticity Tensions",
    duration: "90 minutes",
    activities: [
      {
        time: "15 min",
        title: "Select a tension",
        desc: "In small groups, choose a tension from the map and explore how design choices might address competing expectations.",
      },
      {
        time: "25 min",
        title: "Develop a design response",
        desc: "Modify a prompt or develop a scenario. Consider which expectations your design prioritises, what it compromises, and where inauthenticity might be playful or productive. No programming experience is required.",
      },
      {
        time: "15 min",
        title: "Test each other’s designs",
        desc: "Exchange designs and use live interactions, scenario walkthroughs, and boundary testing to see where expectations conflict. Organisers will explain the distress protocol before testing and share support resources after the session.",
      },
      {
        time: "20 min",
        title: "Review and refine",
        desc: "Refine your design in light of the feedback. Record the strategies you used, the trade-offs you made, and any new tensions.",
      },
      {
        time: "15 min",
        title: "Bring the findings together",
        desc: "Finalise the shared conceptual map and collect design responses, including their trade-offs, where they break down, and how they can use inauthenticity productively.",
      },
    ],
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

const organiserLinkTypes = [
  "linkedin",
  "orcid",
  "scholar",
  "website",
] as const;

type OrganiserLinkType = (typeof organiserLinkTypes)[number];

const organiserLinkLabels: Record<OrganiserLinkType, string> = {
  linkedin: "LinkedIn",
  orcid: "ORCID",
  scholar: "Scholar",
  website: "Website",
};

const linkIcon = (type: OrganiserLinkType) => {
  if (type === "linkedin") return Linkedin;
  if (type === "orcid") return CircleUserRound;
  if (type === "scholar") return GraduationCap;
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
            <a href={submissionUrl}>Submit</a>
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
            characters,
            <br />
            how it is negotiated, and how those understandings can inform design.
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
              { icon: Users, label: "Capacity", value: "25" },
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
          <div className="max-w-4xl mx-auto space-y-6 text-center leading-relaxed">
            <p className="max-w-prose mx-auto text-muted-foreground">
              What makes an LLM-driven NPC feel authentic is still an open
              question. The workshop will focus on two questions.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {workshopQuestions.map((question, index) => (
                <Card
                  key={question}
                  className="p-7 bg-gradient-parchment border-accent/40 shadow-deep-card"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3">
                    Question {index + 1}
                  </p>
                  <p className="font-display text-xl text-foreground leading-relaxed">
                    {question}
                  </p>
                </Card>
              ))}
            </div>
            <p className="max-w-prose mx-auto text-muted-foreground">
              We’ll develop a shared vocabulary and map different understandings
              of authenticity, whose perspectives shape them, and where they
              agree or conflict. We’ll use the map to explore design strategies
              and identify open questions for research and practice.
            </p>
          </div>
        </div>
      </section>

      <section id="schedule" className="py-24 container">
        <SectionHeader icon={Calendar} eyebrow="Chapter III" title="Schedule" />
        <div className="max-w-4xl mx-auto space-y-10">
          {schedule.map((session) => session.activities ? (
            <div key={session.title}>
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-5">
                <h3 className="font-display text-2xl text-accent">
                  {session.title}
                </h3>
                <span className="text-sm uppercase tracking-widest text-muted-foreground">
                  {session.duration}
                </span>
              </div>
              <div className="relative space-y-4">
                <div className="absolute left-[88px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent hidden sm:block" />
                {session.activities.map((activity) => (
                  <div
                    key={`${session.title}-${activity.time}-${activity.title}`}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 group"
                  >
                    <div className="sm:w-20 shrink-0 text-right">
                      <span className="font-display text-accent text-lg">
                        {activity.time}
                      </span>
                    </div>
                    <div className="hidden sm:flex flex-col items-center pt-2">
                      <div className="h-3 w-3 rounded-full bg-primary shadow-ember group-hover:animate-flicker" />
                    </div>
                    <Card className="flex-1 p-5 bg-card/60 border-border/60 hover:border-accent/60 transition-smooth">
                      <h4 className="font-display text-lg text-foreground mb-1">
                        {activity.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {activity.desc}
                      </p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <Card key={session.title} className="p-5 bg-gradient-parchment border-accent/40">
              <h3 className="font-display text-lg text-accent mb-1">
                {session.title}
              </h3>
              <p className="text-sm text-muted-foreground">{session.desc}</p>
            </Card>
          ))}
          <p className="mx-auto max-w-prose text-center text-sm text-muted-foreground">
            Scenario walkthroughs are available as an alternative to live
            gameplay. Facilitators will support both in-person and remote
            participants.
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
              We invite 500-word position papers for “Keepin’ it Real:
              Authenticity in LLM-driven NPCs”, a CHI 2027 workshop examining
              what authenticity means for LLM-driven non-player characters, how
              it is negotiated, and how different understandings can inform
              design.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We welcome researchers, designers, developers, practitioners,
              and players with perspectives on LLM-driven characters.
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
                    <span className="text-foreground">Attendance:</span>{" "}
                    Accepted authors are prioritised; other CHI attendees may
                    join subject to capacity
                  </li>
                  <li>
                    <span className="text-foreground">Outputs:</span> We’ll
                    share accepted papers on this site and use them to build
                    a map for discussion.
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
                <a href={submissionUrl}>Submit via EasyChair</a>
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
        <div className="grid gap-6 max-w-5xl mx-auto sm:grid-cols-4 sm:[&>*]:col-span-2 sm:[&>:last-child:nth-child(odd)]:col-start-2">
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
            <div className="divider-rune" aria-hidden="true">
              <img src="/icon.svg" alt="" className="h-4 w-4" />
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-8 border-t border-border/40 text-center text-xs text-muted-foreground">
        Keepin' It Real ·{" "}
        <a
          href="https://chi2027.acm.org/"
          className="underline underline-offset-2 hover:text-accent"
        >
          CHI 2027
        </a>{" "}
        · Pittsburgh, USA
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

const OrganiserCard = ({ organiser }: { organiser: Organiser }) => {
  const [open, setOpen] = useState(false);
  const links = organiserLinkTypes.flatMap((type) => {
    const url = organiser.links?.[type];
    return url ? [{ type, url }] : [];
  });

  return (
    <Card className="p-6 bg-gradient-parchment border-border/60 hover:border-accent/60 transition-smooth">
      <div className="flex items-start gap-4">
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-gradient-ember flex items-center justify-center shadow-ember font-display text-xl text-primary-foreground">
          {organiser.image ? (
            <img
              src={`/organisers/${organiser.image}`}
              alt={organiser.name}
              className="h-full w-full object-cover"
            />
          ) : (
            organiser.name
              .replace(/"/g, "")
              .split(" ")
              .map((n) => n[0])
              .join("")
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-lg text-foreground">
            {organiser.name}
          </h3>
          <p className="text-accent text-sm">{organiser.role}</p>
          <p className="text-muted-foreground text-xs mt-1 italic">
            {organiser.affiliation}
          </p>
          <a
            href={`mailto:${organiser.email}`}
            className="text-muted-foreground hover:text-accent text-xs mt-1 inline-block transition-smooth break-all"
          >
            {organiser.email}
          </a>
        </div>
      </div>
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
          <div className="pt-4 mt-4 border-t border-border/60">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {organiser.bio}
            </p>
            {links.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-4">
                {links.map((l) => {
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
                      <span>{organiserLinkLabels[l.type]}</span>
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
