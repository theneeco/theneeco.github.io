/*
  EDIT THIS FILE ONLY.
  Everything in quotes "like this" is text that shows on the site.
  Rules:
  - Keep the quote marks " " around every bit of text.
  - If your text itself needs a straight quote mark, don't use one — reword instead.
  - Keep every comma between items.
  - Don't delete the curly brackets { } or square brackets [ ].
  When you're done, save (commit) the file. The site updates in about a minute.
*/

const CONTENT = {

  // ---------- Used in the header on every page, and the home page ----------
  name: "[Your Name]",
  tagline: "GRC, privacy and AI governance consultant. Adelaide, South Australia.",

  // ---------- Home page ----------
  heroHeadline: "Hi, I'm [Your Name]. I help organisations make security and privacy decisions they can defend.",
  heroIntro1: "I'm a GRC, privacy and AI governance consultant in Adelaide. I found out how controls actually fail by trying to break them as a penetration tester, then spent years testing them from the other side: SOX controls testing, bank audits, and CRISC and CIPM in hand.",
  heroIntro2: "Right now I'm building public evidence instead of waiting for a role to generate it: a CPS 230/234 assurance review, a live tool that tracks every regulator deadline an incident starts, and a pull request into an open-source GRC platform. Open to GRC, privacy and AI governance roles across Australia.",
  employers: ["[Employer]", "[Employer]", "[Employer]"],

  // ---------- Contact links, used in the header, footer and Contact page ----------
  linkedin: "https://www.linkedin.com/in/nikhilckubsad",

  // ---------- Journey page: one entry per stage of your career, MOST RECENT FIRST ----------
  // Add or remove entries by copying a whole { ... }, block. The first one with current: true gets the red dot.
  // "highlights" is the list under the "What I built" dropdown — add or remove lines freely.
  journey: [
    {
      when: "Now · Adelaide",
      company: "Independent",
      role: "GRC, Privacy and AI Governance",
      current: true,
      headline: "Building public evidence instead of waiting for a role to generate it.",
      body: "Between roles, so I'm doing the work anyway: a full CPS 230/234 assurance review, a live tool that tracks every regulator deadline an incident starts, and a pull request into an open-source GRC platform, while studying for CISA and the AIGP.",
      learning: "That public work has to hold up without a client to catch a mistake before it ships — there's no safety net, so the rigour has to be the same or higher.",
      highlights: [
        "CPS 230/234 assurance review for a fictional super fund, including a Board Risk Committee paper",
        "Breach Clock — a live tool mapping every regulator notification deadline an incident starts",
        "Research into super funds' automated-decision disclosures ahead of the 10 Dec 2026 deadline",
        "Pull request adding ASD Essentials to an open-source GRC platform",
        "Studying for CISA and the IAPP AIGP"
      ]
    },
    {
      when: "[Year] to [Year]",
      company: "[Employer]",
      role: "Risk and Privacy",
      current: false,
      headline: "Privacy stopped being a clause in a risk register and became its own discipline.",
      body: "[One or two sentences on the role itself — the programs you ran or supported, and the scale of the organisation.]",
      learning: "Earning CRISC and CIPM, and getting involved with the DPO Club privacy community, showed me that privacy and security risk are related but not interchangeable — they need different evidence and different conversations with leadership.",
      highlights: [
        "CRISC (ISACA) and CIPM (IAPP) certifications",
        "Active member of the DPO Club privacy community",
        "[Add a specific privacy or risk program you worked on]"
      ]
    },
    {
      when: "[Year] to [Year] · [Employer]",
      company: "[Employer]",
      role: "Audit and Controls Testing",
      current: false,
      headline: "Testing the same controls from the other side taught me what makes one defensible.",
      body: "SOX controls testing and bank audits — walking into organisations to check that what they said about their controls was actually true.",
      learning: "A control that can't produce evidence it worked last quarter isn't a control yet, no matter how well the policy reads.",
      highlights: [
        "SOX controls testing",
        "Bank audits",
        "[Add a specific: the size of the control set, an industry, or a finding you're proud of]"
      ]
    },
    {
      when: "[Year] to [Year] · [Employer]",
      company: "[Employer]",
      role: "Penetration Testing",
      current: false,
      headline: "Attackers don't read policies, so neither did I.",
      body: "Internal and external engagements against live environments: Active Directory attack paths, privilege escalation, the gap between what a policy says and what a determined attacker can actually do.",
      learning: "The fastest way to find out whether a control works is to try to get around it, not to check whether a document describing it exists.",
      highlights: [
        "Internal and external penetration tests",
        "Active Directory attack path analysis",
        "[Add a specific engagement or finding you're proud of]"
      ]
    }
  ],

  // ---------- Philosophy page: one entry per belief ----------
  // This page is a work in progress — expect it to go through a few iterations.
  philosophy: [
    {
      title: "Start from how things actually fail",
      body: "Penetration testing taught me that attackers don't read policies. I test a control by asking how I'd get around it, not by checking that a document exists."
    },
    {
      title: "Evidence beats documents",
      body: "A control that can't show it worked last quarter isn't a control yet. Give me five controls with evidence over fifty with good intentions."
    },
    {
      title: "Know which clock is running",
      body: "An incident doesn't start one deadline, it starts several at once — APRA, the OAIC, ASIC, each with its own trigger and window. Knowing which clocks apply before the incident happens is half the job."
    },
    {
      title: "Write for the person deciding",
      body: "A board needs the three risks that matter, what each would cost and the decision it's being asked to make. The technical detail belongs in the appendix."
    },
    {
      title: "Privacy is a design constraint",
      body: "The cheapest privacy fix happens before the data is collected. I work with product and engineering teams early, so privacy shapes the design instead of blocking the launch."
    },
    {
      title: "Govern AI by use case",
      body: "\"AI\" is too broad to govern. A chatbot answering member questions and a model deciding insurance claims need very different controls, so I start with an inventory of what's actually in use."
    }
  ],

  // ---------- My Agents page: one entry per project ----------
  // status must be exactly one of: "live", "building", "planned"
  // link: the URL once it's live, or null while it isn't
  agents: [
    {
      title: "Breach Clock",
      body: "A free web tool. Answer five or six questions about an incident and it lays out every notification clock that starts: CPS 234 (72 hours to APRA), CPS 230 (BCP activation), the Privacy Act's notifiable data breaches scheme, the proposed 72-hour OAIC regime, and ASIC RG 78 (30 days) — each linked back to the source paragraph.",
      proves: "working knowledge of Australian financial services and privacy regulation.",
      status: "building",
      due: "Due Nov 2026",
      link: null
    },
    {
      title: "Finding to Board",
      body: "One internal penetration test of my own lab, written up three ways: a technical report with evidence and CVSS, risk register entries with owners and ratings, and a two-page paper for a Board Risk Committee.",
      proves: "translating technical findings into risk and governance language.",
      status: "building",
      due: "Due Dec 2026",
      link: null
    },
    {
      title: "Automated decisions in super fund privacy policies",
      body: "From 10 December 2026, privacy policies must disclose substantially automated decisions. I'm scoring the public privacy policies of the 15 largest super funds, before and after the deadline, against a published rubric.",
      proves: "privacy law and AI governance applied to a real deadline.",
      status: "building",
      due: "Due mid-Dec 2026",
      link: null
    },
    {
      title: "CPS 230 and CPS 234 assurance review — Southern Cross Super",
      body: "A full review pack for a fictional 120k-member super fund that outsources administration, custody and cloud hosting: a critical operations register, a material service provider register, a CPS 234 control map with deliberate deficiencies, and a Board Risk Committee paper.",
      proves: "APRA prudential standards in an assurance setting.",
      status: "planned",
      due: "Dec 2026",
      link: null
    },
    {
      title: "ASD Essentials library for CISO Assistant",
      body: "Adding ASD's new Essentials framework, published October 2026, to an open-source GRC platform used across the industry, with a mapping from the Essential Eight so both frameworks stay comparable during the transition.",
      proves: "Essential Eight and ASD Essentials, and open-source GRC tooling.",
      status: "planned",
      due: "Jan 2027",
      link: null
    }
  ],

  // ---------- Industry Notes page: one entry per note ----------
  // Empty for now — add a { ... } block here (copy the commented example) when you're ready to publish the first one.
  // {
  //   date: "2026-11-06",
  //   dateLabel: "6 November 2026",
  //   title: "Headline for the note",
  //   body: "What happened, in plain terms.",
  //   take: "Your take on what it means.",
  //   sourceLabel: "Source name",
  //   sourceUrl: "https://example.com"
  // }
  industryNotes: []

};
