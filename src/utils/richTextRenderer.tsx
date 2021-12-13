import { Box } from '@chakra-ui/react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import {
  Document,
  BLOCKS,
  MARKS,
  INLINES,
  TopLevelBlock,
} from '@contentful/rich-text-types'
import { Code } from '@/components/atoms/blog/Code'
import { ContentImage } from '@/components/atoms/blog/ContentImage'
import { EmbeddedEntry } from '@/components/atoms/blog/EmbeddedEntry'
import { InlineEmbeddedEntry } from '@/components/atoms/blog/InlineEmbeddedEntry'
import { LinkEntry } from '@/components/atoms/blog/LinkEntry'
import { CautionCard } from '@/components/molecules/CautionCard'
import BlogStyle from '@/styles/blog'

const getRichTextRenderer = (data: TopLevelBlock[]) => {
  const document: Document = {
    nodeType: BLOCKS.DOCUMENT,
    data: {},
    content: data,
  }
  // オプション
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <BlogStyle.Bold>{text}</BlogStyle.Bold>,
    },
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const {
          title,
          description,
          thumbnail,
          id,
          embeddedType,
          embeddedUrl,
          type,
        } = node.data.target.fields
        // cautionコンポーネントの場合
        if (node.data.target.sys?.contentType?.sys?.id === 'caution-card') {
          console.log(description)
          return (
            <Box my={4}>
              <CautionCard type={type}>{description}</CautionCard>
            </Box>
          )
        }
        // 埋め込みのタイプが指定されている場合
        if (embeddedType) {
          switch (embeddedType?.sys?.id) {
            // code sand box
            case '4NecTy7FIkYr7Si5dD1WDf':
              return (
                <iframe
                  src={`${embeddedUrl}&theme=dark`}
                  title="upload-image"
                  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                  style={{
                    width: '100%',
                    height: '500px',
                    border: 0,
                    borderRadius: '4px',
                    overflow: 'hidden',
                    margin: '24px 0',
                  }}
                />
              )
          }
        }
        // そうではない場合
        else {
          const thumbnail_url = thumbnail?.fields?.file?.url ?? null
          const thumbnail_alt = thumbnail?.fields?.description ?? ''
          return (
            <EmbeddedEntry
              title={title}
              description={description}
              thumbnail_alt={thumbnail_alt}
              thumbnail_url={thumbnail_url}
              id={id}
            />
          )
        }
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const target = node.data.target
        const { fields } = target
        const {
          file: { url },
          title,
        } = fields
        return <ContentImage url={`https:${url}`} title={title} />
      },
      [INLINES.EMBEDDED_ENTRY]: (node) => {
        const { title, id } = node.data.target.fields
        return <InlineEmbeddedEntry title={title} id={id} />
      },
      [INLINES.HYPERLINK]: ({ data }, children) => {
        const ogp = data['ogp']
        if (ogp) {
          return (
            <LinkEntry
              url={data.uri}
              ogp_title={ogp['og:title']}
              ogp_description={ogp['og:description']}
              ogp_url={ogp['og:url']}
              ogp_image={ogp['og:image']}
            />
          )
        }
        return (
          <BlogStyle.ExternalLink href={data.uri}>
            {children}
          </BlogStyle.ExternalLink>
        )
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        if (
          node.content.length === 1 &&
          node.content[0]?.marks?.find((x) => x.type === 'code')
        ) {
          return <Code>{children}</Code>
        } else if (
          node?.content[0]?.nodeType === 'text' &&
          node?.content[0]?.value === '' &&
          node?.content[1]?.nodeType === 'hyperlink' &&
          !!node?.content[1]?.ogp &&
          node?.content[2]?.nodeType === 'text' &&
          node?.content[2]?.value === ''
        ) {
          const ogp = node?.content[1].ogp
          return (
            <LinkEntry
              url={node.content[1].data.uri}
              ogp_title={ogp['og:title']}
              ogp_description={ogp['og:description']}
              ogp_url={ogp['og:url']}
              ogp_image={ogp['og:image']}
            />
          )
        }
        return <BlogStyle.Paragraph>{children}</BlogStyle.Paragraph>
      },
      [BLOCKS.HEADING_1]: (node, children) => (
        <BlogStyle.H1 id={children} className="content">
          {children}
        </BlogStyle.H1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <BlogStyle.H2 id={children} className="content">
          {children}
        </BlogStyle.H2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <BlogStyle.H3 id={children} className="content">
          {children}
        </BlogStyle.H3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <BlogStyle.H4 id={children} className="content">
          {children}
        </BlogStyle.H4>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <BlogStyle.H5 id={children} className="content">
          {children}
        </BlogStyle.H5>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <BlogStyle.H6 id={children} className="content">
          {children}
        </BlogStyle.H6>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <BlogStyle.OrderList>{children}</BlogStyle.OrderList>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <BlogStyle.UnOrderList>{children}</BlogStyle.UnOrderList>
      ),
      [BLOCKS.QUOTE]: (node, children) => (
        <BlogStyle.BlockQuote>{children}</BlogStyle.BlockQuote>
      ),
    },
    renderText: (text) => text.replace('!', '?'),
  }
  return documentToReactComponents(document, options)
}

export default getRichTextRenderer
