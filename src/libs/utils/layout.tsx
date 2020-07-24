import React, { constructor } from "react";
interface ILayoutStructure {
  name: string;
  components: any[];
}
interface IPageStructure {
  layout: any;
  placeholder?: any;
}
interface ILayoutComponent {
  id: string;
  config?: object;
  components?: ILayoutComponent[];
}

function pageIterator(
  pageData: IPageStructure,
  identifier: string,
  layout: string
) {
  let iterators = layout === "layout" ? pageData.layout : pageData.placeholder;
  if (layout === "layout") {
    return iterators.component[identifier];
  } else if (layout === "placeholder") {
    return iterators[identifier];
  }
}
function layoutIterator(layout: ILayoutComponent[], pageData: IPageStructure) {
  layout.forEach((item: ILayoutComponent) => {
    if (item.id) {
      if (String(item.id).indexOf("placeholder") > -1) {
        let identifier = String(item.id).substring(
          String(item.id).indexOf("?id=") + 4
        );
        let placeholderChildren = pageIterator(
          pageData,
          identifier,
          "placeholder"
        );
        if (placeholderChildren) {
          item.components = placeholderChildren;
        }
      } else {
        let identifier = item.id;
        let componentConfig = pageIterator(pageData, identifier, "layout");
        item = Object.assign(item, componentConfig);
      }
      if (item.components) {
        layoutIterator(item.components, pageData);
      }
    }
    return item;
  });
  return layout;
}

export function JSONConversion(
  layoutData: ILayoutStructure,
  pageData: IPageStructure
) {
  layoutData.components = layoutIterator(layoutData.components, pageData);
  return layoutData;
}
