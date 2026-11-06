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
  heroIntro1: "I'm a GRC, privacy and AI governance consultant in Adelaide. I started out breaking into systems as a penetration tester, then moved to the other side of the table: audits, controls testing, risk and privacy programmes.",
  heroIntro2: "I'm most interested in where APRA's prudential standards, the Privacy Act and ASD's new Essentials framework meet, and in how organisations can adopt AI without losing control of it.",
  employers: ["[Employer]", "[Employer]", "[Employer]"],

  // ---------- Contact links, used in the header, footer and Contact page ----------
  linkedin: "https://www.linkedin.com/in/your-handle",
  github: "https://github.com/your-username",

  // ---------- Journey page: one entry per stage of your career ----------
  // Add or remove entries by copying a whole { ... }, block. The last one with current: true gets the red dot.
  journey: [
    {
      when: "[Year] to [Year] · [Employer]",
      title: "Penetration testing",
      body: "[One or two sentences: the kinds of systems you tested and what it taught you about how controls actually fail.]",
      current: false
    },
    {
      when: "[Year] to [Year] · [Employer]",
      title: "Audit and controls testing",
      body: "SOX controls testing and bank audits. [Add a specific: the industry, the size of the control set, or a finding you're proud of.]",
      current: false
    },
    {
      when: "[Year] to [Year]",
      title: "Risk and privacy",
      body: "Earned CRISC (ISACA) and CIPM (IAPP), and contributed to the DPO Club privacy community. [Add the work you did in this period.]",
      current: false
    },
    {
      when: "Now · Adelaide",
      title: "GRC, privacy and AI governance",
      body: "Building public work on APRA's CPS 230 and CPS 234, the Privacy Act reforms and ASD Essentials, and looking for my next role in Australia.",
      current: true
    }
  ],

  // ---------- Philosophy page: one entry per belief ----------
  philosophy: [
    {
      title: "Start from how things actually fail",
      body: "Penetration testing taught me that attackers don't read policies. I test a control by asking how I'd get around it, not by checking that a document exists."
    },
    {
      title: "Evidence beats documents",
      body: "A control that can't show it worked last quarter isn't a control yet. I'd rather see five controls with evidence than fifty with good intentions."
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

  // ---------- Work page: one entry per project ----------
  // status must be exactly one of: "live", "building", "planned"
  // link: the URL once it's live, or null while it isn't
  work: [
    {
      title: "Breach Clock",
      body: "A free web tool. Answer a few questions about an incident and see every notification deadline it starts under CPS 234, CPS 230, the Privacy Act and ASIC's breach reporting rules.",
      proves: "working knowledge of Australian financial services regulation.",
      status: "building",
      due: "Due Nov 2026",
      link: null
    },
    {
      title: "Finding to Board",
      body: "One internal penetration test of my lab, written up three ways: a technical report, risk register entries, and a two-page paper for a Board Risk Committee.",
      proves: "translating technical findings into risk and governance language.",
      status: "building",
      due: "Due Dec 2026",
      link: null
    },
    {
      title: "Automated decisions in super fund privacy policies",
      body: "From 10 December 2026, privacy policies must disclose substantially automated decisions. I'm reviewing how the largest super funds respond, using a published scoring rubric.",
      proves: "privacy law and AI governance applied to a real deadline.",
      status: "building",
      due: "Due mid-Dec 2026",
      link: null
    },
    {
      title: "CPS 230 and CPS 234 assurance review",
      body: "A full review pack for a fictional super fund: critical operations, material service providers, control testing and a board paper.",
      proves: "APRA prudential standards in an assurance setting.",
      status: "planned",
      due: "Dec 2026",
      link: null
    },
    {
      title: "ASD Essentials library for CISO Assistant",
      body: "Adding ASD's new Essentials framework, published October 2026, to an open-source GRC platform, with a mapping from the Essential Eight.",
      proves: "Essential Eight and ASD Essentials, and GRC tooling.",
      status: "planned",
      due: "Jan 2027",
      link: null
    }
  ]

};
