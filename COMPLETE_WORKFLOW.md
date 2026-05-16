# COMPLETE WORKFLOW GUIDE — Vibe-assistant
# Full documentation for using the complete system

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## QUICK START (5 minutes)
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 1. Clone & Setup

```bash
git clone https://github.com/sarafraj1010/Vibe-assistant-.git
cd Vibe-assistant-
npm install
bash scripts/init.sh
```

### 2. Configure Environment

```bash
cp .env.example .env.local
# Edit .env.local with your API keys
```

### 3. Start Building

```bash
# In ANY language — this example is Hindi
@APP.md "मुझे एक freelancer invoice app बनाना है जिसमें:
- Invoice create, edit, delete
- PDF export
- Payment tracking (Razorpay)
- Client management
- Email receipts"
```

### Result

```
✅ 28 agents activate
✅ Reverse engineering (competitors, design)
✅ Architecture selected
✅ Components built (in parallel)
✅ Auth system ready
✅ All features built (in parallel)
✅ Tests passing
✅ Live on Vercel

TOTAL TIME: 80-90 minutes
TOTAL TOKENS: ~7,600 / 11,000
```

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## COMPLETE COMMAND REFERENCE
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### Build Commands

```bash
# Full build from scratch (any language)
@APP.md "my app idea here"
@APP.md "मेरे app का idea"
@APP.md "Mon idée d'app"
@APP.md "我的应用想法"

# Continue from last session
@APP.md /next

# See what's done and what's left
@APP.md /status

# View token usage per agent
@APP.md /tokens

# View current architecture
@APP.md /architecture

# View component tree
@APP.md /components

# View agent assignments
@APP.md /agents
```

### Component Commands

```bash
# Add new component
@APP.md /component ButtonVariant
@APP.md /component new_component "2-col card layout"

# Add new page
@APP.md /page dashboard/reports "analytics dashboard"

# Add new feature
@APP.md /feature invoice-export "CSV and PDF export"

# Add new hook
@APP.md /hook useInvoices "fetch and cache invoices"
```

### Debugging Commands

```bash
# Fix specific error
@APP.md /fix "Button not clicking on mobile"
@APP.md /fix "TypeError: Cannot read property 'user' of undefined"
@APP.md /debug invoices-not-loading

# Run security audit
@APP.md /security

# Run tests
@APP.md /test
@APP.md /test:unit
@APP.md /test:e2e
```

### Deployment Commands

```bash
# Pre-deployment checklist
@APP.md /deploy:check

# Deploy to production
@APP.md /deploy

# View deployment logs
@APP.md /logs:deployment

# Rollback to last version
@APP.md /rollback
```

### Development Commands

```bash
# Start dev server
npm run dev

# Run tests watch mode
npm run test:watch

# Run E2E tests
npm run test:e2e

# Build for production
npm run build

# Format code
npm run format

# Lint check
npm run lint
```

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## EXAMPLE WORKFLOWS
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### Workflow 1: Build Freelancer Invoice SaaS

```
Day 1 — Morning
@APP.md "मुझे एक freelancer invoice app चाहिए जिसमें:
- Email की जरूरत
- PDF export
- Payment integration (Razorpay)
- Client dashboard
- Multi-language support"

↓ [80 minutes]

✅ LIVE at https://invoice-app.vercel.app

Day 1 — Afternoon
@APP.md /status
  → See: 35 components, 8 features, 100+ tests passing

@APP.md /next
  → Continue: "Add email templates for overdue invoices"

↓ [20 minutes]

✅ Feature added, tests pass, deployed
```

### Workflow 2: Add Features to Existing App

```
Session 1 — Created invoice app (see above)
memory.md saved everything ✓

Day 2 — Morning
@APP.md /next
  → Continues from where we left off!

@APP.md "अब reporting dashboard चाहिए जिसमें:
- Monthly revenue chart
- Outstanding amount tracker
- Payment timeline
- Tax summary"

↓ [30 minutes]

✅ Reporting dashboard live

@APP.md "अब team members को invite करने का feature चाहिए"

↓ [25 minutes]

✅ Team management live

Total Day 2: 55 minutes for 2 major features
```

### Workflow 3: Maintain & Debug

```
User reports: "Invoice PDF not generating on mobile"

@APP.md /fix "PDF export failing on iOS devices"

↓ [5 minutes]

ReverseEngineerAgent analyzes:
- Tests on actual iOS device
- Identifies: PDFKit compatibility
- Suggests: Use browser-native PDF API

↓ [10 minutes]

✅ Fixed + tests added + deployed
```

### Workflow 4: Performance Optimization

```
Lighthouse score drops to 78

@APP.md /optimize
  → Runs PerformanceOptimizationAgent

Agents analyze:
- Code splitting opportunities
- Image optimization
- Lazy loading opportunity
- Bundle size reduction

↓ [30 minutes]

✅ Lighthouse: 95
✅ First Contentful Paint: 1.2s → 0.8s
✅ Bundle size: 120KB → 85KB
```

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## TOKEN EFFICIENCY — How to Save Tokens
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### ✅ DO's

```
✅ Read memory.md before asking for anything
✅ Ask for complete features ("add invoice export" not "help me export")
✅ Combine related asks ("add edit + delete" in one command)
✅ Use /status before /next
✅ Let agents run in parallel (they do by default)
✅ Test locally before asking for debugging help
```

### ❌ DON'Ts

```
❌ Ask for code snippets (ask for complete files)
❌ Repeat the app idea (it's in memory.md)
❌ Ask for the same fix twice
❌ Request sequential work (parallel is default)
❌ Copy-paste old code (agents reuse automatically)
❌ Interrupt agents mid-task
```

### Example: Efficient vs Inefficient

```
INEFFICIENT:
@APP.md "Can you add a button component?"
→ 80 tokens
@APP.md "Make it have loading state"
→ 120 tokens
@APP.md "Add hover effects too"
→ 100 tokens
TOTAL: 300 tokens ❌

EFFICIENT:
@APP.md "Create Button component with:
- 4 variants (primary, secondary, outline, ghost)
- Size options (sm, md, lg)
- Loading state with spinner
- Hover effects
- Dark mode support"
→ 180 tokens ✅

SAVED: 120 tokens (40% reduction)
```

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## BEST PRACTICES
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 1. Start Sessions with /status

```bash
@APP.md /status
# Always check what's done before asking for more
```

### 2. Build Features in Order of Dependency

```bash
# CORRECT:
1. @APP.md /next  # Auth first (dependency for everything)
2. @APP.md /next  # Dashboard layout
3. @APP.md /next  # Invoice list
4. @APP.md /next  # Invoice create/edit

# WRONG:
1. @APP.md /next  # Build random features
2. Can lead to missing dependencies
```

### 3. Test Locally Between Sessions

```bash
npm run dev
npm run test:e2e
# Verify everything works before continuing
```

### 4. Commit to Git After Each Major Feature

```bash
git add .
git commit -m "feat: add invoice export feature"
# Creates recovery points
```

### 5. Keep memory.md Updated

```bash
# Don't manually edit, but review after each session
git diff memory.md
# Verify all work is logged
```

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## TROUBLESHOOTING
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### Problem: "Agent says it's out of tokens"

```
SOLUTION:
1. The task was too large
2. Break it into smaller pieces
3. Ask for ONE component at a time

@APP.md /tokens → See which agents have budget left
@APP.md /optimize → Run optimization pass
```

### Problem: "Two agents built the same component"

```
SOLUTION:
This shouldn't happen (OrchestratorAgent prevents it)
If it does:
1. Report it: @APP.md /bug "duplicate component building"
2. Manually remove duplicate from git
3. Continue with working version
```

### Problem: "Build failed at step X"

```
SOLUTION:
@APP.md /fix "build failed at [step]"
→ Agent will:
1. Diagnose the issue
2. Show what went wrong
3. Provide fix
4. Test it
5. Continue from checkpoint
```

### Problem: "Tests are failing"

```
SOLUTION:
@APP.md /test:debug
→ TestAgent will:
1. Run tests in verbose mode
2. Show exact error
3. Suggest fixes
4. Ask if you want automatic fix
```

---

**You're ready to build apps at superhuman speed!** 🚀

Good luck, and happy building! 🎉
