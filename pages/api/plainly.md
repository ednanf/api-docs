---
title: Plainly
description: Product and technical overview of Plainly, developed in collaboration with OpenAI Codex.
---

# Plainly

**A little less noise. A little more clarity.**

Plainly is a minimal productivity application for turning scattered thoughts into manageable next steps. Projects, nested tasks, and notes share a simple outline, with local editing and optional account synchronization across devices.

[Open Plainly](https://plainly.works/)

## Developed with Codex

Plainly was developed by Ednan Rogério Frizzera Filho in collaboration with OpenAI Codex, combining his product direction with AI-assisted development across the frontend, backend, and deployment.

The project explores how a developer can work with a coding agent to build and refine a complete product, connecting interface decisions with persistence, account management, offline behavior, and testing.

## Product experience

- **Structured planning:** organize projects, nested tasks, and multiline notes in one outline.
- **Direct interaction:** use keyboard shortcuts, drag-and-drop reordering, inline tags, search, and completion filters.
- **Local and connected work:** start without an account, or verify an account to synchronize saved work across devices.
- **Portable documents:** import and export plain-text documents in `.plainly` and `.txt` formats.
- **A focused interface:** use light and dark themes, responsive layouts, and installation as a progressive web app (PWA).

## Architecture

| Layer               | Technology                       | Responsibility                                                    |
| ------------------- | -------------------------------- | ----------------------------------------------------------------- |
| Frontend            | React, TypeScript, Vite          | Outline editing, interface state, and local drafts                |
| Backend             | Node.js, Vercel Functions        | Account operations, request validation, and workspace persistence |
| Database            | MongoDB                          | Accounts, workspaces, sessions, and rate-limit records            |
| Transactional email | Resend                           | Account confirmation and email-change messages                    |
| Hosting             | Vercel Hobby, MongoDB Atlas Free | Static frontend delivery, API execution, and database hosting     |

The browser serves as the editing environment. Account-related operations and cloud saves pass through a Node.js API, deployed as a single Vercel Function, which validates requests and accesses MongoDB. Database connections are reused across requests when available.

The application runs within free-tier infrastructure constraints, keeping deployment small and operational requirements modest.

## Engineering decisions

### Offline editing and synchronization

Guest documents stay in the browser. Verified account workspaces also retain local device copies, allowing editing to continue offline after the workspace has been saved on that device.

Cloud saves are debounced and serialized. Each draft carries a base revision; the backend checks that revision before accepting a save. A stale draft cannot silently overwrite newer cloud changes. When a conflict occurs, users can export their local work and reconcile it with the cloud version manually.

Synchronization resumes when connectivity returns while the application is open. Signing in and account operations require a connection.

### Account boundaries

Workspace access is scoped to the signed-in account. Requests validate the expected account so that a session change in another window cannot redirect a pending save into a different account.

Passwords are hashed with bcrypt. Sessions use HttpOnly cookies, and only session-token hashes are stored in the database. Email confirmation uses expiring, single-use links, with rate limiting applied to sensitive operations.

### Installation and updates

The service worker caches public application files for offline use. API responses, sessions, and email confirmation links are excluded from that cache.

Updates wait for user action and pending saves. The application preserves the current document and view when applying an update, helping users return to their work with minimal interruption.

## Validation

Automated tests cover editor behavior, validation, account rules, and offline support. Database integration tests use a disposable MongoDB database to check persistence, account isolation, sessions, revision conflicts, and email verification flows. Production builds also run TypeScript checks.

## API availability

This page is a public product and technical overview. Plainly's internal API supports its own application and is not currently offered as a supported interface for third-party integrations.

## Ownership

Plainly is an independent, proprietary product.

Copyright © 2026 Ednan Rogério Frizzera Filho. All rights reserved.
