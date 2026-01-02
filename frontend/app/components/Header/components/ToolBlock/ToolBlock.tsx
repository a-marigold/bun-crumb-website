import IconButton from '@/UI/IconButton';
import IconLink from '@/UI/IconLink';

import toolStyles from './ToolBlock.module.scss';
import { GITHUB_REPO_URL } from '@/constants/githubRepoUrl';

export default function ToolBlock() {
    return (
        <div className={toolStyles['tool-block']}>
            <IconButton
                iconHref='#theme-icon'
                iconWidth={24}
                iconHeight={24}
                iconColor='var(--icon-color)'
                aria-label='Toggle theme'
            />

            <IconLink
                href={GITHUB_REPO_URL}
                iconHref='#github-logo-icon'
                iconWidth={20}
                iconHeight={20}
                iconColor='var(--icon-color)'
                aria-label='Open Bun Crumb github repository'
            />
        </div>
    );
}
