import ExampleTheme from "./themes/ExampleTheme";
import { LexicalComposer } from "../node_modules/@lexical/react/LexicalComposer";
import { RichTextPlugin } from "../node_modules/@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "../node_modules/@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "../node_modules/@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "../node_modules/@lexical/react/LexicalAutoFocusPlugin";
import LexicalErrorBoundary from "../node_modules/@lexical/react/LexicalErrorBoundary";

import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { HeadingNode, QuoteNode } from "../node_modules/@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "../node_modules/@lexical/table";
import { ListItemNode, ListNode } from "../node_modules/@lexical/list";
import { CodeHighlightNode, CodeNode } from "../node_modules/@lexical/code";
import { AutoLinkNode, LinkNode } from "../node_modules/@lexical/link";
import { LinkPlugin } from "../node_modules/@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "../node_modules/@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "../node_modules/@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "../node_modules/@lexical/markdown";

import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import AutoLinkPlugin from "./plugins/AutoLinkPlugin";

function Placeholder() {
  return <div className="editor-placeholder">
  Lorem ipsum dolor sit amet, 
  consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut 
  labore et dolore magna aliqua....
  <></>
  Lorem ipsum dolor sit amet, 
  consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut 
  labore et dolore magna aliqua....</div>;
}

const editorConfig = {
  // The editor theme
  theme: ExampleTheme,
  // Handling of errors during update
  onError(error) {
    throw error;
  },
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode
  ]
};

export default function Editor() {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <ToolbarPlugin />
        <div className="editor-inner">
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <CodeHighlightPlugin />
          <ListPlugin />
          <LinkPlugin />
          <AutoLinkPlugin />
          <ListMaxIndentLevelPlugin maxDepth={7} />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
        </div>
      </div>
    </LexicalComposer>
  );
}
