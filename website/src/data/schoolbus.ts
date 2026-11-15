export type FeatureGroup = {
  audience: string;
  platform: string;
  features: { title: string; text: string }[];
};

export type Tier = {
  id: "lite" | "premium";
  name: string;
  subtitle: string;
  tagline: string;
  note?: string;
  groups: FeatureGroup[];
};

export const smartbusLite: Tier = {
  id: "lite",
  name: "SmartBus Lite",
  subtitle: "Essential School Bus Tracking & Parent Alert System",
  tagline:
    "Built for Students, Not Just Vehicles — Dedicated Mobile & Web Applications for Schools and Parents.",
  groups: [
    {
      audience: "For School Administration & Transport Managers",
      platform: "Web & Mobile Dashboard",
      features: [
        {
          title: "Live Tracking of All Buses & Routes",
          text: "Track every school bus live on one centralized map with instant vehicle status (Running, Idle, Stopped, Inactive).",
        },
        {
          title: "Student-Wise Bus Allocation",
          text: "Assign students individually or in bulk to specific pickup and drop buses with clear mapping and control.",
        },
        {
          title: "Automated Proximity Alerts",
          text: "Automatically sends notifications to parents when the bus is about to reach their pickup or drop stop.",
        },
        {
          title: "Over-Speed & Rash Driving Alerts",
          text: "Receive instant mobile and web notifications whenever a bus exceeds set speed limits or shows harsh driving behaviour.",
        },
        {
          title: "90-Day Route Playback & Operational Reports",
          text: "Replay historical bus movements for up to 90 days and access detailed daily trip reports, day-wise distance logs, and vehicle activity summaries.",
        },
        {
          title: "Instant Parent Announcements & Communication",
          text: "Broadcast important transport notices—such as traffic delays, temporary replacement buses, or fee reminders—directly to parents without manual phone calls.",
        },
        {
          title: "Bulk Vehicle & User Role Management",
          text: "Easily add, update, or remove buses individually or in bulk, and manage transport operations from both desktop and mobile apps.",
        },
      ],
    },
    {
      audience: "For Parents",
      platform: "Dedicated Parent Mobile Application",
      features: [
        {
          title: "Dedicated Parent Mobile App with Multi-Language Support",
          text: "Track your child's assigned pickup and drop bus in real time through an intuitive app available in English, Hindi, and regional languages.",
        },
        {
          title: "Automated Bus Arrival Proximity Alerts",
          text: "Automatically receives notifications when the bus is about to reach your pickup or drop stop, eliminating long waits on the road.",
        },
        {
          title: "Real-Time School Transport Announcements",
          text: "Receive instant notifications for route delays, temporary replacement buses, and important school updates directly inside the app.",
        },
      ],
    },
  ],
};

export const smartbusPremium: Tier = {
  id: "premium",
  name: "SmartBus Premium",
  subtitle: "Complete Student Attendance, Route Automation & Safety Suite",
  tagline:
    "Complete School Transportation Ecosystem — Dedicated Apps for School Managers, Parents, and Drivers & Attendants.",
  note: "Includes all SmartBus Lite features, plus:",
  groups: [
    {
      audience: "For School Administration & Transport Managers",
      platform: "Web & Mobile App",
      features: [
        {
          title: "Unified Executive & Trip Dashboard",
          text: "Monitor live fleet status (On Trip, Idle, Stopped), checkpoint completion (Visited, Upcoming, Missed), daily student attendance percentages, and trip failure analytics in real time.",
        },
        {
          title: "AI-Assisted Route Optimization",
          text: "Automatically generate the shortest, most fuel-efficient bus routes based on student pickup/drop addresses, geofences, and bus seating capacity.",
        },
        {
          title: "Flexible Trip Creation & Bulk Onboarding",
          text: "Create trips manually, from historical playback routes, or by copying existing trips—with bulk student and route onboarding via Excel upload.",
        },
        {
          title: "Emergency Bus Replacement & Live Schedule Control",
          text: "Instantly assign an emergency replacement bus during a breakdown, update trip timings, add/remove students on the fly, and notify parents automatically.",
        },
        {
          title: "Wrong-Bus Boarding & Route Deviation Alerts",
          text: "Receive immediate alerts if a student boards the wrong bus, if a scheduled stop is skipped, or if a vehicle deviates from its designated route.",
        },
        {
          title: "Driver & Attendant Roster Allocation",
          text: "Maintain driver and bus attendant records, monitor trip assignments, and verify logins via OTP or password.",
        },
        {
          title: "100+ Analytical & Compliance Reports",
          text: "Generate, schedule, and export detailed or summary reports across student attendance, swipe logs, driver behaviour, fuel usage, and trip punctuality (Excel, PDF, KML).",
        },
      ],
    },
    {
      audience: "For Parents",
      platform: "Dedicated Parent Mobile App",
      features: [
        {
          title: "Live Bus Tracking & Accurate Arrival Alerts",
          text: "View your child's assigned bus live on the map with real-time ETA countdowns and automatic notifications when the bus is about to reach your pickup or drop stop.",
        },
        {
          title: "Instant Boarding & Deboarding Confirmation",
          text: "Receive immediate push/SMS notifications the exact second your child boards or exits the bus, with live journey status (At Home, In Bus, Arrived at School).",
        },
        {
          title: "Easy In-App Leave & Self-Pickup Management",
          text: "Apply for single-day or multi-day student leave—or mark Self Pickup/Drop—directly from the app, automatically notifying the school and bus driver so buses don't wait unnecessarily.",
        },
        {
          title: "One App for Multiple Children & Multi-Language Support",
          text: "Monitor multiple children across different school buses from a single login, available in English, Hindi, and regional languages.",
        },
        {
          title: "Live In-Bus Camera Feeds",
          text: "Stream live onboard video (Door View, Inside Bus View, Driver View) when camera hardware is installed.",
        },
      ],
    },
    {
      audience: "For Drivers & Bus Attendants",
      platform: "Dedicated Driver & Attendant App",
      features: [
        {
          title: "Complete Trip Schedule & Turn-by-Turn Navigation",
          text: "View all running, upcoming, and completed trips on one screen with step-by-step GPS route navigation to stay on schedule and avoid traffic delays.",
        },
        {
          title: "Multi-Mode Student Attendance (RFID, QR Code & Manual)",
          text: "Mark student boarding and deboarding effortlessly via contactless RFID card tap, student ID QR code scan, or one-tap manual entry.",
        },
        {
          title: "Real-Time Student Leave & Stop Alerts",
          text: "Automatically see which students are on leave or opting for self-pickup, along with instant alerts for route changes, holidays, or schedule updates.",
        },
        {
          title: "QR-Code Emergency Bus Switching",
          text: "In case of a bus breakdown or swap, drivers simply scan a QR code on the replacement bus to transfer the active trip and student manifest instantly.",
        },
        {
          title: "One-Tap SOS Emergency Distress Button",
          text: "Raise an immediate SOS alert directly to school administrators and dispatchers during any on-road medical or mechanical emergency.",
        },
        {
          title: "Multi-Language Driver Interface",
          text: "Simple, intuitive interface available in Hindi, English, and regional languages to eliminate language barriers and miscommunication.",
        },
      ],
    },
  ],
};

export const schoolUpgrades = [
  {
    title: "4G Live Dome or Multi-Channel Bus Camera System",
    text: "Real-time interior cabin and front road video streaming with live monitoring, recorded history playback, and in-cabin audio recording—accessible directly from the school control room without needing Wi-Fi.",
  },
  {
    title: "Wireless Fuel Monitoring",
    text: "Precision wireless fuel level sensors to detect fuel pilferage, track refueling logs, and monitor exact mileage across the school bus fleet.",
  },
];

export const schoolPackageBadge =
  "Complete Turnkey School Package — Includes 1-Year Recharge, Dedicated Apps, On-Site Installation, and Lifetime Support";
