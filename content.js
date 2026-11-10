/*
  EDIT THIS FILE ONLY.
  Everything in quotes "like this" is text that shows on the site.
  Rules:
  - Keep the quote marks " " around every bit of text.
  - If your text itself needs a straight quote mark, don't use one; reword instead.
  - Keep every comma between items.
  - Don't delete the curly brackets { } or square brackets [ ].
  When you're done, save (commit) the file. The site updates in about a minute.
*/

const CONTENT = {

  // ---------- Used in the header on every page, and the home page ----------
  name: "Nikhil Kubsad",
  tagline: "GRC, Privacy and AI Governance professional. Australia.",

  // ---------- Home page ----------
  heroHeadline: "Hi, I'm Nikhil. I help organisations make security and privacy decisions they can defend.",
  heroIntro1: "I'm a GRC specialist with hands-on experience running ISO 27001 ISMS programmes, internal audits and control validation, and third-party and supply-chain security from vendor intake through offboarding, across healthcare, BFSI, automotive and logistics, in India and Australia. CRISC, ISO 27001 Lead Auditor and CIPM-certified, with a Master of Cyber Security from RMIT.",
  heroIntro2: "I build tooling to replace manual GRC work rather than just doing it by hand: internal apps for TPRM reporting, gap assessment generation and contract review. Currently searching for my next GRC, privacy or AI governance role in Australia, and building public projects in the meantime.",
  employers: [
    { name: "Tsaaro Consulting", url: "https://tsaaro.com" },
    { name: "CyRAACS", url: "https://www.cyraacs.com" },
    { name: "LTG Infrastructure", url: "https://ltgindia.com" }
  ],

  // ---------- Contact links, used in the header, footer and Contact page ----------
  linkedin: "https://www.linkedin.com/in/nikhilckubsad",
  email: "nikhilckubsad@gmail.com",

  // ---------- Journey page: one entry per stage of your career, MOST RECENT FIRST ----------
  // Add or remove entries by copying a whole { ... }, block. The first one with current: true gets the red dot.
  // "highlights" is the list under the "What I built" dropdown. Add or remove lines freely.
  journey: [
    {
      when: "Oct 2026 · Now · Australia",
      company: "Searching",
      role: "GRC, Privacy and AI Governance",
      current: true,
      headline: "Between roles, so I'm doing the work anyway.",
      body: "Left Tsaaro Consulting on 2 October 2026 and I'm now looking for my next GRC, privacy or AI governance role in Australia. In the meantime I'm building self-directed projects: a regulatory-deadline tool, an open-source GRC contribution, assurance-review work, as public evidence rather than waiting for a role to generate it.",
      learning: "That public work has to hold up without a client or a manager to catch a mistake before it ships; there's no safety net, so the rigour has to be the same or higher.",
      highlights: [
                "CPS 230/234 assurance review for a fictional super fund, including a Board Risk Committee paper",
        "Pull request adding ASD Essentials to an open-source GRC platform",
        "See the My Agents page for the full list"
      ]
    },
    {
      when: "Sep 2025 to Oct 2026 · Remote",
      company: "Tsaaro Consulting",
      role: "Manager, Data Privacy & AI Governance",
      current: false,
      headline: "Took governance programmes from policy to evidence for clients across multiple frameworks at once.",
      body: "Ran ISO 27001 and SOC 2 readiness engagements end to end: scoping, gap and risk assessments, control validation, remediation support and evidence handling for external audit and attestation, while defining and operationalising governance policies and control frameworks aligned to ISO 27001, NIST 800-53/171, DPDPA, PDPL and UK-GDPR.",
      learning: "Training a whole organisation on information security governance taught me more about where controls actually break than any audit did. The gap is almost always in how a policy gets explained, not in the policy itself.",
      highlights: [
        "ISO 27001 and SOC 2 readiness: scoping, gap/risk assessments, control validation, remediation, evidence handling",
        "Governance policies and control frameworks aligned to ISO 27001, NIST 800-53/171, DPDPA, PDPL and UK-GDPR",
        "Updated a client's third-party risk management framework, including vendor risk criteria and ongoing monitoring",
        "Management-level risk, control and remediation reviews for senior stakeholders",
        "Organisation-wide training on information security governance and control implementation",
        "Built a vibe-coded internal tool to automate contract review, flagging high-risk clauses for legal and risk sign-off"
      ]
    },
    {
      when: "Feb 2024 to Aug 2025 · Bengaluru",
      company: "CyRAACS",
      role: "Consultant, Governance, Risk and Compliance",
      current: false,
      headline: "Spent a year embedded inside a major bank's TPRM function, then automated the parts that didn't need a human.",
      body: "Led end-to-end engagements from scoping through gap and risk assessments across ISO 27001, ISO 27701, SOC 2, NIST 800-53/171, DPDPA and PDPL, on both internal audit and external audit-readiness work. Spent part of this role as an outsourced third-party risk management resource embedded on-site at a major publicly-traded Indian bank, reporting directly to the bank's Head of TPRM.",
      learning: "Reporting straight to a Head of TPRM inside a regulated bank showed me the difference between a finding that's technically correct and one a business owner can actually act on; translating one into the other is most of the job.",
      highlights: [
        "End-to-end engagements across ISO 27001, ISO 27701, SOC 2, NIST 800-53/171, DPDPA and PDPL",
        "Internal audit team member, plus leading external audit-readiness engagements",
        "Control validation, risk registers and Management Review Meetings (MRM)",
        "Embedded on-site TPRM resource at a major publicly-traded Indian bank, reporting to the Head of TPRM",
        "Built a vibe-coded internal tool to automate TPRM reporting, reducing manual turnaround time",
        "Built a vibe-coded internal tool to automate gap assessment report generation"
      ]
    },
    {
      when: "Jul 2022 to Oct 2022 · Melbourne",
      company: "RMIT University",
      role: "GRC Intern",
      current: false,
      headline: "First real exposure to privacy as its own discipline, not a line item in a risk register.",
      body: "Mapped and documented IT infrastructure and streamlined procedural guidelines in Collibra, and supported Privacy Impact Assessments aligned with GDPR and the Australian Privacy Act.",
      learning: "Even a short internship was enough to see that data governance tooling is only as good as the documentation habits behind it; the platform doesn't fix a team that doesn't update its records.",
      highlights: [
        "Mapped and documented IT infrastructure in Collibra",
        "Supported Privacy Impact Assessments aligned with GDPR and the Australian Privacy Act"
      ]
    },
    {
      when: "Sep 2021 to Feb 2022 · Bengaluru",
      company: "LTG Infrastructure",
      role: "Junior Cyber Security Analyst",
      current: false,
      headline: "Helped stand up a security programme from zero as the second person on the team.",
      body: "As the second member of a two-person security team reporting to the Head of InfoSec, helped build the organisation's security programme from the ground up, including access control, least-privilege practices and organisation-wide MFA.",
      learning: "Building a security programme with two people meant there was nowhere to hide; you learn fast which controls actually get used and which ones just look good in a policy document.",
      highlights: [
        "Implemented access control and least-privilege practices",
        "Rolled out multi-factor authentication (MFA) across the organisation"
      ]
    },
    {
      when: "Jan 2021 to Aug 2021 · Mysore",
      company: "Excelsoft Technologies",
      role: "Application Security Tester",
      current: false,
      headline: "Attackers don't read policies, so neither did I.",
      body: "Conducted web application penetration tests using OWASP ZAP and Burp Suite, mapping findings to the OWASP Top 10 and CWE Top 25, and delivered reports with a step-by-step proof of concept and prioritised remediation for every vulnerability.",
      learning: "Writing a proof of concept for every finding, not just a severity rating, taught me that a report only changes behaviour if the reader can see exactly how the attack worked.",
      highlights: [
        "Web application penetration testing with OWASP ZAP and Burp Suite",
        "Findings mapped to the OWASP Top 10 and CWE Top 25",
        "Reports with step-by-step proof of concept and prioritised remediation"
      ]
    }
  ],

  // ---------- Philosophy page: one entry per belief ----------
  // This page is a work in progress. Expect it to go through a few iterations.
  philosophy: [
    {
      title: "Security is a business function first",
      body: "Every industry protects something different. In healthcare it's patient data and clinical trust, in BFSI it's capital and counterparty risk, in automotive and logistics it's uptime and the physical supply chain. I start by learning what the business actually runs on, because that tells me what an adversary, or a regulator, would go after first."
    },
    {
      title: "GRC should add momentum, not just gate it",
      body: "I've seen third-party risk reporting eat days of manual work every cycle, so I built an internal tool to automate it. Speed and rigour aren't actually in tension if you automate the paperwork instead of the judgement calls. The business shouldn't have to choose between moving fast and staying compliant, and most of the time it doesn't have to."
    },
    {
      title: "Start from how things actually fail",
      body: "Application security testing taught me that attackers don't read policies. I test a control by asking how I'd get around it, not by checking that a document exists."
    },
    {
      title: "Evidence beats documents",
      body: "A control that can't show it worked last quarter isn't a control yet. Give me five controls with evidence over fifty with good intentions."
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
      body: "\"AI\" is too broad to govern. A chatbot answering member questions and a model deciding insurance claims need very different controls, not one blanket policy."
    },
    {
      title: "AI literacy is now a core skill",
      body: "You can't govern what you don't understand from the outside. I built my own evidence-collection agent, deliberately weakened the model, and planted a prompt injection to see how it failed. Reading a vendor's model card isn't governance. Knowing how these systems actually break is."
    }
  ],

  // ---------- My Agents page: one entry per project ----------
  // status must be exactly one of: "live", "building", "planned"
  // link: the URL once it's live, or null while it isn't
  agents: [
    {
      title: "GRC Evidence-Collection Agent",
      body: "An AI agent that collects audit evidence across six simulated systems (Okta, HRIS, AWS IAM, AWS S3, GitHub, Jira), checks it against ISO 27001 and SOC 2 controls, and hands a reviewer a tamper-evident review pack. Every connector is read-only, pass/fail comes only from deterministic code, and evidence is SHA-256 hashed and locked on collection. The model never gets to decide a result. I stress-tested it with a weak local model and a planted prompt-injection attack, then moved the two weak points it exposed out of the prompt and into code.",
      proves: "designing AI agents for regulated environments: guardrails enforced in code, tamper-evident evidence, and adversarial testing rather than trusting the model.",
      status: "live",
      due: null,
      link: "grc-evidence-agent.html"
    },
    {
      title: "CPS 230 and CPS 234 assurance review: Southern Cross Super",
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
  // Empty for now. Add a { ... } block here (copy the commented example) when you're ready to publish the first one.
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
