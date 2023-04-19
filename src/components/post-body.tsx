import styles from './post-body.module.css'
import { RicosViewer } from 'ricos-viewer'
import { toDraft } from 'ricos-content/libs/toDraft';
import { pluginLink } from 'wix-rich-content-plugin-link/viewer';

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <RicosViewer plugins={[pluginLink()]} content={toDraft(content)} />
    </div>
  )
}
