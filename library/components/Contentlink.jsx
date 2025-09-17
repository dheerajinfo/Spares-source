import { Link } from 'react-router-dom';

function ContentLink({ to = '/', children = 'Link', className = '' }) {

  return (
    <Link
      to={to}
      className={`text-base font-normal px-2 tracking-wider underline underline-offset-8 ${className}`}
    >
      {children}
    </Link>
  );
}

export default ContentLink;
