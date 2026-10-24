
"use strict";

/*
==========================================================
 JAVASCRIPT DATE — REVISION + MERN INTERVIEW NOTES
 Level: ~1 year JavaScript developer
==========================================================

MENTAL MODEL:
A Date object represents a timestamp (an instant).
Local time and UTC are two ways to interpret that instant.

Epoch = 1970-01-01T00:00:00.000Z
JavaScript timestamps use milliseconds.
Unix timestamps commonly use seconds.

==========================================================
1. CREATE DATES
==========================================================
*/

const now = new Date();

console.log("Current date:", now);
console.log("Type:", typeof now); // "object"
console.log("Local string:", now.toString());
console.log("ISO / UTC:", now.toISOString());

// Numeric arguments: year, monthIndex, day, hours, minutes
// Month index starts at 0: January=0, December=11.
// This creates LOCAL time, not UTC.
const localDate = new Date(2026, 0, 1, 9, 30);
console.log("Local date:", localDate.toString());

// Reliable way to specify a UTC instant:
const utcDate = new Date("2026-01-01T09:30:00.000Z");
console.log("UTC instant:", utcDate.toISOString());

// Date-only ISO strings are interpreted as UTC midnight:
const dateOnly = new Date("2026-01-01");
console.log("Date only:", dateOnly.toISOString());

// A date-time without a timezone is interpreted as LOCAL time:
const localDateTime = new Date("2026-01-01T09:30:00");
console.log("Local date-time:", localDateTime.toString());

// GOTCHA: avoid ambiguous formats such as "1-1-2026".
// Their interpretation may vary across environments.

// INTERVIEW:
// What is the difference between new Date() and Date()?
// new Date() creates a Date object.
// Date() without new returns a string for the current date.

/*
==========================================================
2. FORMAT DATES
==========================================================
*/

const date = new Date("2026-10-24T12:30:45.123Z");

console.log(date.toISOString());         // ISO, always UTC
console.log(date.toJSON());              // ISO string for valid date
console.log(date.toUTCString());         // Readable UTC string
console.log(date.toString());            // Readable local string
console.log(date.toDateString());        // Local date only
console.log(date.toTimeString());        // Local time + timezone
console.log(date.toLocaleString());      // Localized date and time
console.log(date.toLocaleDateString());  // Localized date
console.log(date.toLocaleTimeString());  // Localized time

// Production example: readable date for a user interface.
// Output depends on locale and timezone.
console.log(
  date.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Karachi",
  })
);

// Format weekday and month:
console.log(
  date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  })
);

// GOTCHA:
// Display formatting is not a safe way to compare dates.
// Compare timestamps instead.

/*
==========================================================
3. GET DATE COMPONENTS
==========================================================
*/

const d = new Date("2026-10-24T12:30:45.123Z");

console.log(d.getFullYear());      // Local year
console.log(d.getMonth());         // Local month: 0-11
console.log(d.getMonth() + 1);     // Human-readable month: 1-12
console.log(d.getDate());          // Day of month: 1-31
console.log(d.getDay());           // Weekday: Sunday=0, Saturday=6
console.log(d.getHours());         // Local hour: 0-23
console.log(d.getMinutes());       // 0-59
console.log(d.getSeconds());       // 0-59
console.log(d.getMilliseconds());  // 0-999

// UTC getters:
console.log(d.getUTCFullYear());
console.log(d.getUTCMonth());
console.log(d.getUTCDate());
console.log(d.getUTCDay());
console.log(d.getUTCHours());

// IMPORTANT:
// getDay() = weekday
// getDate() = day of the month
// These are different methods.

/*
==========================================================
4. TIMESTAMPS AND COMPARISONS
==========================================================
*/

const timestampNow = Date.now();

console.log("Milliseconds:", timestampNow);
console.log("Seconds:", Math.floor(timestampNow / 1000));

const first = new Date("2026-01-01T00:00:00Z");
const second = new Date("2026-02-01T00:00:00Z");

console.log(first.getTime());
console.log(second.getTime());

console.log(first < second); // true
console.log(first.getTime() === second.getTime()); // false

// Production example: calculate elapsed time.
const startedAt = Date.now();

// Imagine some operation runs here.

const elapsedMs = Date.now() - startedAt;
console.log("Elapsed milliseconds:", elapsedMs);

// For precise performance measurement in browsers or Node.js,
// prefer performance.now() for elapsed duration.
// Date.now() represents wall-clock time and can be adjusted.

/*
==========================================================
5. DATE ARITHMETIC
==========================================================
*/

const today = new Date();

// Mutates the existing Date object:
const nextWeek = new Date(today);
nextWeek.setDate(nextWeek.getDate() + 7);

console.log("Today:", today.toISOString());
console.log("Seven calendar days later:", nextWeek.toISOString());

// Copy a Date when you need an independent object:
const original = new Date();
const copy = new Date(original);

copy.setDate(copy.getDate() + 1);

console.log("Original:", original.toISOString());
console.log("Copy:", copy.toISOString());

// GOTCHA:
// const prevents reassignment of the variable, not mutation
// of the Date object itself.

// Date arithmetic can roll into another month or year.
// setDate() handles month/year rollover automatically.

// INTERVIEW:
// What is the difference between adding 24 hours and adding
// one calendar day?
// Around daylight-saving transitions, those operations can
// produce different local clock times.

/*
==========================================================
6. VALIDATE DATES
==========================================================
*/

function isValidDate(value) {
  return (
    value instanceof Date &&
    Number.isFinite(value.getTime())
  );
}

console.log(isValidDate(new Date()));        // true
console.log(isValidDate(new Date("bad")));   // false

// Invalid Date is an object, not null:
const invalidDate = new Date("not-a-date");

console.log(invalidDate instanceof Date); // true
console.log(Number.isNaN(invalidDate.getTime())); // true

// GOTCHA:
// new Date("2026-02-30") may normalize to another date
// in some runtimes rather than rejecting it.
// For strict calendar validation, validate year/month/day
// components yourself or use a suitable date library.

// Validate a date-only input in YYYY-MM-DD form:
function isValidDateOnly(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const [year, month, day] = value.split("-").map(Number);

  const candidate = new Date(
    Date.UTC(year, month - 1, day)
  );

  return (
    candidate.getUTCFullYear() === year &&
    candidate.getUTCMonth() === month - 1 &&
    candidate.getUTCDate() === day
  );
}

console.log(isValidDateOnly("2024-02-29")); // true
console.log(isValidDateOnly("2025-02-29")); // false
console.log(isValidDateOnly("2026-13-01")); // false

/*
==========================================================
7. COMMON PRODUCTION PATTERNS
==========================================================
*/

// A. Created/updated timestamps:
// In a MERN app, persist timestamps consistently (usually UTC).
// MongoDB BSON Date values represent instants.
// Mongoose commonly manages createdAt and updatedAt with:
// { timestamps: true }

// B. Check whether a deadline has passed:
function isPastDeadline(deadline) {
  const deadlineDate = new Date(deadline);

  if (!isValidDate(deadlineDate)) {
    throw new Error("Invalid deadline");
  }

  return Date.now() > deadlineDate.getTime();
}

console.log(
  isPastDeadline("2020-01-01T00:00:00Z")
); // true

// C. Check whether a timestamp falls in a range.
// Use a half-open interval: start <= value < end.
function isWithinRange(value, start, end) {
  const t = new Date(value).getTime();
  const s = new Date(start).getTime();
  const e = new Date(end).getTime();

  if (![t, s, e].every(Number.isFinite)) {
    throw new Error("Invalid date in range");
  }

  return t >= s && t < e;
}

console.log(
  isWithinRange(
    "2026-05-15T12:00:00Z",
    "2026-05-01T00:00:00Z",
    "2026-06-01T00:00:00Z"
  )
); // true

// D. Get a UTC timestamp from components:
const midnightUTC = Date.UTC(2026, 0, 1);

console.log(new Date(midnightUTC).toISOString());

// E. JSON serialization:
const event = { name: "Interview", scheduledAt: utcDate };

console.log(JSON.stringify(event));
// Date values serialize to ISO strings via toJSON().

// GOTCHA:
// JSON has no native Date type.
// When parsing JSON, a date-looking string remains a string
// unless your code explicitly converts it.

/*
==========================================================
8. TIMEZONE AND BACKEND GOTCHAS
==========================================================
*/

// 1. UTC is not the same thing as the user's local timezone.
// 2. A Date object does not retain an IANA timezone such as
//    "Asia/Karachi" or "America/New_York".
// 3. toISOString() always formats in UTC.
// 4. Date-only values such as birthdays may represent a
//    calendar date, not an instant.
// 5. Appointments may need both local date/time and a timezone.
// 6. Daylight-saving rules can change local offsets.
// 7. Never assume the server and browser use the same timezone.
// 8. Never trust a client timestamp for authorization or billing.
//    The backend should enforce critical deadlines.
// 9. Validate input and define the timezone semantics explicitly.
// 10. For complex timezone rules, consider Temporal where
//     supported, or a maintained library such as Luxon.

// INTERVIEW:
// Should every date be stored as UTC?
// Store instants consistently (commonly UTC). But a birthday,
// billing date, or recurring local appointment may be a
// calendar-date or timezone-based domain value, not just an instant.

/*
==========================================================
9. TEST YOURSELF — ANSWERS HIDDEN IN COMMENTS
==========================================================

// Q1: What does getMonth() return for January?
// Answer: 0.

// Q2: What does getDay() return for Sunday?
// Answer: 0.

// Q3: What does getDate() return?
// Answer: Day of the month, from 1 to 31.

// Q4: Are Date.now() and new Date().getTime() different units?
// Answer: No. Both return milliseconds since the Unix epoch.

// Q5: Which method always outputs a UTC ISO string?
// Answer: toISOString().

// Q6: What is typeof new Date()?
// Answer: "object".

// Q7: What happens when you compare two Date objects with <?
// Answer: Their numeric time values are used for comparison.

// Q8: How do you convert milliseconds to Unix seconds?
// Answer: Math.floor(milliseconds / 1000).

// Q9: Does const make a Date immutable?
// Answer: No. Date methods can mutate it.

// Q10: Is new Date("2026-01-01") the same as
//      new Date("2026-01-01T00:00:00")?
// Answer: Not necessarily. The former is UTC midnight;
// the latter is local midnight.

// Q11: Why avoid "1-1-2026"?
// Answer: It is a non-standard string format with
// implementation-dependent parsing behavior.

// Q12: Does JSON.stringify preserve a Date object?
// Answer: No. A valid Date normally becomes an ISO string.

// Q13: Does Date store an IANA timezone?
// Answer: No.

// Q14: What should you use to measure elapsed performance?
// Answer: performance.now() in supported browser/Node contexts,
// rather than relying on wall-clock Date.now().

// Q15: Why might adding 24 hours differ from adding a calendar day?
// Answer: Daylight-saving transitions can change local offsets.
*/

/*
==========================================================
10. EXTRA PRACTICE
==========================================================

// Predict the result before running each snippet.

console.log(new Date(0).toISOString());
// Expected: 1970-01-01T00:00:00.000Z

console.log(new Date("2024-02-29").getUTCDate());
// Expected: 29

console.log(new Date("invalid").getTime());
// Expected: NaN

console.log(new Date("2026-01-01T00:00:00Z") <
            new Date("2026-01-02T00:00:00Z"));
// Expected: true

const mutable = new Date("2026-01-31T00:00:00Z");
mutable.setUTCDate(mutable.getUTCDate() + 1);
console.log(mutable.toISOString());
// Expected: 2026-02-01T00:00:00.000Z
*/
