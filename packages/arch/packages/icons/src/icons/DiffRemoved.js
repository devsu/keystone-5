// @flow
import React from 'react';
import { style } from '../style';

const svgContent = (
  <path
    fillRule="evenodd"
    d="M13 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 13H1V2h12v12zm-2-5H3V7h8v2z"
  />
);

const DiffRemovedIcon = React.memo<{ title?: string }>(({ title, ...props }) => {
  return (
    <svg aria-hidden height={16} width={14} viewBox="0 0 14 16" style={style} {...props}>
      {title ? <title>{title}</title> : null}
      {svgContent}
    </svg>
  );
});

export default DiffRemovedIcon;
