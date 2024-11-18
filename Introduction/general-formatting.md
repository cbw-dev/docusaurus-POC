---
sidebar_position: 6
---

# *General Formatting Examples*

See the [Docs's Tutorial - Markdown Features](../docs/tutorial-basics/create-a-page) for a bit more info!

## Links

```md
Let's see how to [Create a page](./docs/tutorial-basics/create-a-page).
```

**Result:** Let's see how to [Create a page](../docs/tutorial-basics/create-a-page).

## Images

```md
![Docusaurus logo](/img/docusaurus-social-card.jpg)
```

![Docusaurus logo](/img/docusaurus-social-card.jpg)

## Code Blocks

Markdown code blocks are supported with **Syntax highlighting**.

````md
```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```
````

```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```

## Admonitions

Docusaurus has a special syntax to create admonitions and callouts:

```md
:::tip My tip

Use this awesome feature option

:::

:::danger Take care

This action is dangerous

:::
```
  
**NOTE: For some reason, [] appear around "My tip" and "Take care" in the rendered code (above), they should not be there.**

:::tip My tip

Use this awesome feature option

:::

:::danger Take care

This action is dangerous

:::

**Admonition below requires [] brackets around title**
:::note[Your Title **with** some _Markdown_ `syntax`!]

Some **content** with some _Markdown_ `syntax`.

:::

### More Admonition Examples

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::warning

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::::info[Parent]

Parent content

::::danger[Child]

Child content

:::tip[Deep Child]

Deep child content

:::

::::

:::::

## MDX and React Components

[MDX](https://mdxjs.com/) can make your documentation more **interactive** and allows using any **React components inside Markdown**:

```jsx
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !
```

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`);
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !


## Admonitions with MDX

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

:::tip[Use tabs in admonitions]

<Tabs>
  <TabItem value="python" label="Python">print("Hello World")</TabItem>
  <TabItem value="R" label="R">print("Hello World")</TabItem>
  <TabItem value="bash" label="Bash">echo "Hello World"</TabItem>
</Tabs>

:::

To see more admonition customizations, see here https://docusaurus.io/docs/markdown-features/admonitions#usage-in-jsx. 