---
description: Verify every message key exists in all three languages (en/ko/vi) and flag untranslated text.
---

Verify the trilingual content in `messages/en.json`, `messages/ko.json`, and
`messages/vi.json` is complete and in sync.

1. Flatten each file to dotted key paths (e.g. `hero.h1`, `form.submit`).
2. Treat `messages/en.json` as the source of truth and compare key sets:
   - keys present in `en.json` but **missing** from `ko.json` or `vi.json`;
   - keys present in `ko.json`/`vi.json` but **not** in `en.json` (extra / orphaned).
3. Flag likely-untranslated values: a `ko` or `vi` string that is byte-identical to
   the `en` string (ignore brand names like "DEVIAS HOME", "OEM / ODM", "FSC",
   "ISO 9001", "WhatsApp", and other intentional shared tokens).
4. Confirm every `useTranslations`/`getTranslations` namespace + key referenced in
   `src/components/**` and `src/app/**` actually exists in the message files.

A quick way to compare key parity:

```bash
node -e '
const fs=require("fs");
const load=l=>JSON.parse(fs.readFileSync(`messages/${l}.json`,"utf8"));
const flat=(o,p="")=>Object.entries(o).flatMap(([k,v])=>typeof v==="object"&&v!==null?flat(v,p+k+"."):[p+k]);
const en=flat(load("en")), ko=flat(load("ko")), vi=flat(load("vi"));
const diff=(a,b)=>a.filter(x=>!b.includes(x));
console.log("counts:",{en:en.length,ko:ko.length,vi:vi.length});
console.log("missing in ko:",diff(en,ko));
console.log("missing in vi:",diff(en,vi));
console.log("extra in ko:",diff(ko,en));
console.log("extra in vi:",diff(vi,en));
'
```

Output a compact table: `key | en | ko | vi | status`, then list any untranslated
values found. Only report — do not edit files unless I ask. If fixes are needed,
ask whether to add the missing translations.
