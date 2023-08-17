# App-protected views

SDK provides a Higher Order Component that can be used to wrap Next.js pages and perform basic protection checks. With it, you'll be able to make pages visible only when accessed from within Saleor Dashboard.

## Example usage

```tsx
import { withAuthorization } from "@saleor/app-sdk/app-bridge";

const AppConfigurationPage: NextPage = () => {
  return <div>This is app inside Dashboard</div>;
};

export default withAuthorization()(AppConfigurationPage);
```

This code will render default, unstyled error screens if one of the following checks is not met:

- App is rendered Server Side
- App is rendered outside the iframe
- App is rendered, and the token can't be accessed
- App is rendered, but the token is invalid

If all conditions are successful, the child page will be rendered.

## Configuration

Each condition can be styled with the custom error `ReactNode`, by passing the configuration into the HOC factory.

The interface of configuration is following:

```typescript
type Props = {
  unmounted?: ReactNode;
  notIframe?: ReactNode;
  noDashboardToken?: ReactNode;
  dashboardTokenInvalid?: ReactNode;
};
```

Each prop is optional, so some of them can be left with the default fallback component.

### Full example

```tsx
import { withAuthorization } from "@saleor/app-sdk/app-bridge";
import { ErrorPage } from "src/error-page";

const AppConfigurationPage: NextPage = () => {
  return <div>This is app inside Dashboard</div>;
};

export default withAuthorization({
  unmounted: null,
  notIframe: (
    <ErrorPage error="403">This page can be accessed from dashboard</ErrorPage>
  ),
})(AppConfigurationPage);
```
