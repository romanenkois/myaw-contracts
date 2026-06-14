# @myaw/contracts

Single source of truth for the **request/response DTOs** shared between the
myaw backend and frontend. Pure TypeScript — no Nest, no Angular, no runtime deps.

Consumed as **source** via a tsconfig path alias (no build, no publish):

```jsonc
// in each workspace's tsconfig.base.json
"paths": { "@myaw/contracts": ["libs/contracts/src/index.ts"] }
```

```ts
import { LoginRequestDto, LoginResponseDto } from '@myaw/contracts';
```

## Naming convention

- **Interfaces only** — these are data shapes crossing the wire, no runtime behavior.
- `{Name}RequestDto`  — input of a call (client sends, server receives).
- `{Name}ResponseDto` — result of a call (server sends, client receives).
- Names are **perspective-neutral**: they describe the message's role in the
  exchange, so they read the same from both repos. No `Incoming`/`Outgoing`.
