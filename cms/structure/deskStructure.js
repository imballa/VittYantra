import S from "@sanity/desk-tool/structure-builder";
import {
  FiSettings,
  FiLayout,
  FiCreditCard,
  FiMenu,
  FiFileText,
  FiImage,
  FiBookOpen,
  FiInfo,
  FiSliders
} from "react-icons/fi";

export default () =>
  S.list()
  .title('Content')
  .items([
    S.divider(),
    S.listItem()
     .title('Clients')
     .icon()
     .schemaType('client')
     .child(S.documentTypeList('client').title('Clients')),
    S.divider(),
    S.divider(),
    S.listItem()
     .title('Testimonials')
     .icon()
     .schemaType('testimonial')
     .child(S.documentTypeList('testimonial').title('Testimonials')),
    S.divider(),
    S.listItem()
     .title('Features')
     .icon()
     .schemaType('feature')
     .child(S.documentTypeList('feature').title('Features')),
    S.divider(),
    S.listItem()
      .title('Pages')
      .icon(FiBookOpen)
      .schemaType('landingPage')
      .child(
        S.documentTypeList('landingPage')
          .title('Landing Pages')
          .child(documentId =>
            S.document()
              .documentId(documentId)
              .views([
                S.view.form(),
              ])
          )
      ),
    S.divider(),
    S.listItem()
      .title('Manage Blocks')
      .child(
        S.list()
          .title('Block Type')
          .items([
            S.listItem()
              .title('Hero Block')
              .schemaType('heroBlock')
              .child(S.documentTypeList('heroBlock').title('Hero Block')),
            S.divider(),
            S.listItem()
              .title('Slider Block')
              .icon(FiSliders)
              .schemaType('slider')
              .child(S.documentTypeList('slider').title('Slider Block')),
            S.divider(),  
            S.listItem()
              .title('Text Block')
              .icon(FiFileText)
              .schemaType('textBlock')
              .child(S.documentTypeList('textBlock').title('Text Block')),
            S.divider(),
            S.listItem()
              .title('Image Block')
              .icon(FiImage)
              .schemaType('textBlock')
              .child(S.documentTypeList('imageBlock').title('Image Block')),
            S.divider(),
            S.listItem()
              .title('Accordion Block')
              .schemaType('accordionBlock')
              .child(S.documentTypeList('accordionBlock').title('Accordion Block')),
            S.divider(),
            S.listItem()
              .title('Feature Block')
              .schemaType('featureBlock')
              .child(S.documentTypeList('featureBlock').title('Feature Block')),
            S.divider(),
          ])
      ),
    S.listItem()
      .title('Site Navigation')
      .icon(FiMenu)
      .child(
        S.list()
          .title('Navigation')
          .items([
            S.listItem()
                .title("Header")
                .icon(FiCreditCard)
                .child(
                  S.document()
                    .schemaType("header")
                    .title("Header Details")
                ),
              S.listItem()
                .title("Footer")
                .icon(FiLayout)
                .child(
                  S.document()
                    .schemaType("footer")
                    .title("Footer Details")
                ),
          ])
      ),
    S.listItem()
      .title('Site Settings')
      .icon(FiSettings)
      .child(
        S.list()
          .title('Settings')
          .items([
            S.listItem()
              .title('Site Information')
              .icon(FiInfo)
              .child(
                S.editor()
                  .id('siteInfo')
                  .schemaType('siteInfo')
                  .documentId('siteInfo')
              ),
            S.listItem()
              .title('Site Block Types')
              .child(
                S.list()
                  .title('Block Type for different UI')
                  .items([
                    S.listItem()
                      .title('Slider Type')
                      .schemaType('sliderType')
                      .child(S.documentTypeList('sliderType').title('Slider Type')),
                    S.listItem()
                      .title('Image Block Type')
                      .schemaType('imageBlockType')
                      .child(
                        S.documentTypeList('imageBlockType').title('Image Block Type')
                      ),
                  ])
              )
          ])
      ),
    S.divider()
  ])
