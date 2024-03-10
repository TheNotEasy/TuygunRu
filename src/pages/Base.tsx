import React, {JSX}  from "react";
import {Header} from "@/components/Header/Header.tsx";

export abstract class BasePage extends React.Component {
  public element!: JSX.Element;
  protected abstract headerNav: JSX.Element[];

  constructor(props: {test: string}) {
    super(props);

    // if (this.element === undefined) {
    //   throw new Error("BasePage.element is undefined")
    // }
  }

  render() {
    return (
      <>
        <Header nav={this.headerNav} />
        {this.element}
      </>
    )
  }
}

export function createPage(element: JSX.Element, headerNav: JSX.Element[]) {
  class Page extends BasePage {
    element = element
    headerNav = headerNav
  }

  return Page
}
