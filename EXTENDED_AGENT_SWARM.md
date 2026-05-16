# Extended Agent Swarm System — 28 Specialized AI Agents
# Complete orchestration, task division, and execution protocol

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## AGENT SWARM CONSTITUTION
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### Prime Laws (Non-Negotiable)

```
LAW 1 — ONE AGENT, ONE JOB
  Each agent does EXACTLY ONE thing expertly.
  No cross-contamination. No multi-tasking. No freelancing.
  
LAW 2 — NO DUPLICATE WORK
  OrchestratorAgent maintains registry of all tasks.
  If work exists, REUSE it. Never rebuild.
  
LAW 3 — PARALLEL EXECUTION
  If tasks have no dependencies → run simultaneously.
  If X depends on Y → Y finishes first.
  
LAW 4 — TOKEN EFFICIENCY
  Complete files, never snippets.
  Batch similar tasks.
  Reuse > Rebuild always.
  
LAW 5 — FAIL SAFELY
  Error in one agent ≠ stop all agents.
  Checkpoint system allows recovery from any point.
  
LAW 6 — COMMUNICATION ONLY WHEN NEEDED
  Agents communicate via OrchestratorAgent only.
  Silent operation unless blocked.
  
LAW 7 — SECURITY FIRST
  Every agent validates inputs.
  No hardcoded secrets.
  RLS on every database table.
```

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 28 AGENT TEAM DIRECTORY
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### Master Agents (4) — Run First

| Agent | Role | Input | Output | Time |
|---|---|---|---|---|
| **OrchestratorAgent** | Command center, sequencing, coordination | User prompt | Execution plan | Ongoing |
| **ReverseEngineerAgent** | Extract competitor DNA, design tokens | App idea + competitors | PRD + component tree | 8 min |
| **ArchitectAgent** | Tech stack selection, folder structure | PRD + constraints | tech-stack.md + ERD | 5 min |
| **SecurityAgent** | Security architecture, RLS policies, headers | Project structure | middleware.ts + security checklist | 3 min |

### Foundation Agents (4) — Run Second

| Agent | Role | Dependency | Output | Time |
|---|---|---|---|---|
| **DependencyAgent** | Verify & install all packages | ArchitectAgent | package-lock.json | 4 min |
| **DatabaseAgent** | Schema design, migrations, seed | ArchitectAgent + SecurityAgent | /migrations/*.sql | 7 min |
| **MigrationAgent** | Run & verify schema migrations | DatabaseAgent | Database live + seed data | 2 min |
| **TypeDefinitionAgent** | Generate TypeScript types from schema | DatabaseAgent | /types/schema.ts | 3 min |

### Component Agents (7) — Run in Parallel (Phase 3)

| Agent | Role | Dependency | Output | Time |
|---|---|---|---|---|
| **ButtonComponentAgent** | Button + Link + IconButton variants | ReverseEngineerAgent | components/ui/button.tsx + variants | 3 min |
| **FormComponentAgent** | Input, Textarea, Select, Checkbox, Radio | TypeDefinitionAgent | components/ui/form/** | 5 min |
| **TableComponentAgent** | Data table with sort, filter, pagination | FormComponentAgent | components/ui/data-table.tsx | 6 min |
| **LayoutComponentAgent** | Sidebar, topnav, breadcrumb, main layout | ButtonComponentAgent | components/layouts/** | 4 min |
| **ModalComponentAgent** | Modal, Dialog, Drawer, Popover | ButtonComponentAgent | components/ui/modal-family.tsx | 3 min |
| **CardComponentAgent** | Card, stat card, feature card variants | None | components/ui/card-family.tsx | 2 min |
| **AnimationSystemAgent** | Motion components, transitions, keyframes | None | lib/animations.ts + variants | 3 min |

### Feature Agents (6) — Run in Parallel (Phase 4-5)

| Agent | Role | Dependency | Output | Time |
|---|---|---|---|---|
| **AuthAgent** | Login, register, reset, OAuth, RBAC | DatabaseAgent + FormComponentAgent | app/(auth)/** | 12 min |
| **InvoiceAgent** | CRUD invoices, list, detail, edit views | AuthAgent + TableComponentAgent | app/(dashboard)/invoices/** | 15 min |
| **PaymentAgent** | Razorpay integration, checkout, webhooks | DatabaseAgent + AuthAgent | lib/razorpay.ts + api/payment/** | 10 min |
| **ReportingAgent** | Dashboard, charts, analytics, metrics | InvoiceAgent + DatabaseAgent | app/(dashboard)/reports/** | 12 min |
| **NotificationAgent** | Toasts, bells, email alerts, webhooks | AuthAgent | components/notifications/** | 8 min |
| **TeamAgent** | Invite, roles, permissions, organization | AuthAgent + DatabaseAgent | app/(dashboard)/team/** | 10 min |

### Specialist Agents (4) — Run in Parallel

| Agent | Role | Dependency | Output | Time |
|---|---|---|---|---|
| **EmailAgent** | Email templates, transactional emails | NotificationAgent | emails/** + api/email/** | 6 min |
| **ExportAgent** | PDF, CSV, JSON export functionality | InvoiceAgent + ReportingAgent | lib/export/** | 8 min |
| **SearchAgent** | Full-text search, filters, autocomplete | DatabaseAgent + InvoiceAgent | lib/search/** + api/search/** | 7 min |
| **ImportAgent** | CSV/JSON import, bulk operations | DatabaseAgent + ValidationAgent | lib/import/** + api/import/** | 7 min |

### Verification Agents (3) — Run at End

| Agent | Role | Dependency | Output | Time |
|---|---|---|---|---|
| **TestAgent** | Unit tests, integration tests, E2E | All feature agents | /tests/** + /e2e/** | 15 min |
| **PerformanceAgent** | Bundle size, lighthouse, optimization | All agents | Optimization report + changes | 10 min |
| **DeployAgent** | CI/CD setup, Vercel config, deploy | TestAgent | .github/workflows/** + live app | 8 min |

### Support Agents (3) — On-Demand

| Agent | Role | When Used | Output | Time |
|---|---|---|---|---|
| **HookLibraryAgent** | Custom React hooks (useUser, etc) | FeatureAgents request | hooks/** | 5 min/hook |
| **ValidationAgent** | Zod schemas, input validation | FormComponentAgent + AuthAgent | lib/validations/** | 4 min/schema |
| **ErrorHandlingAgent** | Error boundaries, logging, Sentry | TestAgent identifies issues | error-handling system | 5 min |

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## EXECUTION TIMELINE (Complete Build)
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```
PHASE 0: INITIALIZATION (5 minutes)
─────────────────────────────────────
  00:00 → OrchestratorAgent reads input, detects language
  00:30 → ReverseEngineerAgent extracts competitor DNA (in parallel)
  01:00 → ArchitectAgent selects stack (in parallel)
  01:30 → SecurityAgent prepares security rules (in parallel)
  02:00 → DependencyAgent validates packages (in parallel)
  02:30 → DatabaseAgent designs schema (in parallel)
  03:00 → MigrationAgent runs migrations (in parallel)
  04:00 → TypeDefinitionAgent generates types (in parallel)
  05:00 → All foundational agents complete

PHASE 1: COMPONENT SYSTEM (18 minutes, ALL PARALLEL)
─────────────────────────────────────
  05:00 → ButtonComponentAgent starts
  05:00 → FormComponentAgent starts
  05:00 → TableComponentAgent starts
  05:00 → LayoutComponentAgent starts
  05:00 → ModalComponentAgent starts
  05:00 → CardComponentAgent starts
  05:00 → AnimationSystemAgent starts
  
  23:00 → All 7 component agents complete (7 components, ~50 files)

PHASE 2: CORE FEATURES (45 minutes, MOSTLY PARALLEL)
─────────────────────────────────────
  23:00 → AuthAgent starts (blocks nothing, foundation for others)
  26:00 → Auth complete, other features unblock

  26:00 → InvoiceAgent + ReportingAgent + EmailAgent + ExportAgent (PARALLEL)
  26:00 → SearchAgent + ImportAgent (PARALLEL)
  26:00 → TeamAgent (PARALLEL)
  26:00 → PaymentAgent (PARALLEL)
  26:00 → NotificationAgent (PARALLEL)
  
  68:00 → All feature agents complete (6 major features)

PHASE 3: VERIFICATION (25 minutes)
─────────────────────────────────────
  68:00 → TestAgent starts (unit + integration + E2E)
  83:00 → Tests passing (or errors marked for fixing)

  83:00 → PerformanceAgent starts
  93:00 → Lighthouse 95+, bundle optimized

  93:00 → DeployAgent starts (CI/CD + Vercel)
  101:00 → 🎉 Live in production

TOTAL: 101 minutes (1 hour 41 minutes)
FOR COMPLETE, PRODUCTION-READY APP
```

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## COMPONENT DIVISION — Example (Invoice App)
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### Component Tree Auto-Generated

```
PageComponents (8)
├─ LandingPage
├─ PricingPage
├─ LoginPage
├─ RegisterPage
├─ DashboardLayout
├─ InvoiceListPage
├─ InvoiceDetailPage
└─ InvoiceCreatePage

UIComponents (35)
├─ Button (4 variants)
├─ Input (3 variants)
├─ Select (2 variants)
├─ Checkbox + Radio
├─ DataTable
├─ Card (3 variants)
├─ Modal + Drawer + Popover
├─ Sidebar + Topnav + Breadcrumb
├─ Avatar + Badge + Tag
├─ Toast + Alert + Notification
├─ Skeleton + Loader + Progress
├─ Tabs + Accordion + Dropdown
└─ ... (20+ more)

FeatureComponents (12)
├─ InvoiceForm
├─ InvoiceDetail
├─ InvoiceList
├─ ClientSelector
├─ PaymentButton (Razorpay)
├─ PDFPreview
├─ ReportChart
├─ SearchBar
├─ FilterPanel
├─ BulkActionsBar
├─ EmailPreview
└─ TeamInvite

Hooks (15)
├─ useUser()
├─ useInvoices()
├─ useClients()
├─ usePayments()
├─ useDebounce()
├─ useLocalStorage()
├─ usePagination()
├─ useSort()
├─ useFilter()
├─ useForm()
├─ useMutation()
├─ useAsync()
├─ useTheme()
└─ ... (3 more)

Total: 35 UI + 12 Feature + 15 Hooks = 62 components
```

### Task Assignment to Agents

```
ButtonComponentAgent
├─ Create /components/ui/button.tsx
├─ Variants: primary, secondary, outline, ghost
├─ States: hover, active, disabled, loading
├─ Sizes: sm, md, lg
└─ 3 min to complete

FormComponentAgent
├─ Input.tsx (text, email, password, number)
├─ Textarea.tsx
├─ Select.tsx (single + multi)
├─ Checkbox.tsx + Radio.tsx
├─ All with validation states
└─ 5 min to complete

TableComponentAgent
├─ DataTable.tsx (headless, from TanStack)
├─ Sorting, filtering, pagination
├─ Row selection + bulk actions
├─ 6 min to complete

... and so on for all 28 agents
```

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## AGENT COORDINATION PROTOCOL
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### How Agents Communicate

```
OrchestratorAgent (Central Hub)
├─ Receives all requests
├─ Assigns tasks to agents
├─ Tracks progress & dependencies
├─ Resolves conflicts
├─ Handles checkpointing & recovery
└─ Writes memory.md updates

Agent → OrchestratorAgent: "Task complete, output at X"
OrchestratorAgent → Next Agent: "Your dependency ready at X, start now"

RESULT: Smooth handoff, zero blocking, 40% faster execution
```

### Dependency Resolution

```
SCENARIO: InvoiceAgent needs FormComponentAgent output

Timeline:
  ├─ 05:00 FormComponentAgent starts
  ├─ 10:00 FormComponentAgent completes
  ├─ 26:00 InvoiceAgent starts
  ├─ 26:00 OrchestratorAgent: "FormComponentAgent.tsx ready"
  ├─ 26:00 InvoiceAgent imports & uses FormComponentAgent
  └─ 41:00 InvoiceAgent completes

NO BLOCKING. NO WAITING. Just imports ready when needed.
```

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## TOKEN EFFICIENCY OPTIMIZATION
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### Token Budget Allocation (11,000 total)

```
Foundation Agents    → 1,200 tokens (11%)
  └─ ReverseEngineer, Architect, Security, Database, etc

Component Agents     → 2,000 tokens (18%)
  └─ Buttons, Forms, Tables, Layouts, etc

Feature Agents       → 5,000 tokens (45%)
  └─ Auth, Invoice, Payment, Reporting, etc

Testing Agents       → 1,500 tokens (14%)
  └─ Unit tests, E2E tests, Lighthouse

Deployment Agent     → 600 tokens (5%)
  └─ CI/CD, Vercel config, monitoring

Reserve              → 700 tokens (7%)
  └─ For unexpected issues or optimization
```

### Token Saving Techniques

```
✅ DO:
  - Reuse components (Button → use it everywhere)
  - Generate types once (use across all agents)
  - Batch similar files (all utils together)
  - Export complete files (not snippets)
  - Test while building (catch issues early)

❌ DON'T:
  - Rebuild components (reuse always)
  - Ask for code review of existing code
  - Generate same schema twice
  - Ask for step-by-step explanations
  - Interrupt agents mid-task
```

### Parallel Execution Efficiency

```
Sequential (if all agents ran one-by-one):
  8 + 5 + 3 + 7 + 2 + 3 + 18 + 12 + 45 + 25 = 128 minutes

Parallel (with proper dependency management):
  Phase 0: 5 min (all foundation parallel)
  Phase 1: 18 min (all components parallel)
  Phase 2: 45 min (features parallel, Auth first)
  Phase 3: 25 min (testing + deploy)
  ─────────────────
  TOTAL: 93 minutes

SAVED: 35 minutes (27% faster!)
```

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## ERROR RECOVERY PROTOCOL
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### What Happens When Agent Fails

```
SCENARIO: FormComponentAgent fails at 08:30

Timeline:
  ├─ 08:30 FormComponentAgent error detected
  ├─ 08:30 OrchestratorAgent notified
  ├─ 08:31 Error logged, checkpoint saved
  ├─ 08:32 Other agents continue (not blocked!)
  ├─ 08:32 ErrorHandlingAgent analyzes failure
  ├─ 08:35 Suggested fix provided to FormComponentAgent
  ├─ 08:36 FormComponentAgent retries
  ├─ 08:42 FormComponentAgent succeeds
  └─ 26:00 InvoiceAgent proceeds normally

NO ROLLBACK. OTHER AGENTS KEEP GOING. Resilient by design.
```

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## CHECKPOINT SYSTEM
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### Auto-Saved Checkpoints

```
After each phase completes:
  ├─ Git commit: "checkpoint: phase-0-init-complete"
  ├─ memory.md updated with progress
  ├─ All outputs backed up
  └─ Can resume from any checkpoint

@APP.md /checkpoint list
  → Shows all available recovery points

@APP.md /checkpoint restore phase-2-components
  → Resume from component phase (faster iteration)
```

---

**28 agents, zero coordination overhead, 101-minute delivery time.** 🚀
