- this folder structure is this way because nextauth will automatically create endpoints
  signin
  signout
  etc using get post and others as mentioned in docs of <a href='https://authjs.dev'>authjs.dev</a>.

- for prisma env points should be inside `.env` file,
  other auth env points should be inside `.env.local` file

## `.env` points:

```
DATABASE_URL
```

## `.env.local` points:

```
AUTH_SECRET
AUTH_GOOGLE_ID
AUTH_GOOGLE_SECRET
NEXTAUTH_URL
AUTH_SECRET
```

generate `AUTH_SECRET` by running command:

```
npx auth secret
```
