import { withRouter } from 'next/router';
import { S } from './ActiveImage.styles';

const ActiveImage = ({ router, href, children }) => {
  (function prefetchPages() {
    if (typeof window !== "undefined") {
      router.prefetch(router.pathname)
    }
  })()

  const handleClick = event => {
    event.preventDefault();
    router.push(href)
  }

  const isCurrentPath = router.pathname === href || router.asPath === href;

  return <S.ImageActive
      style={{
          border: isCurrentPath ? '3px solid var(--orange)' : '',
          opacity: isCurrentPath ? '0.5' : '',
        }}
      >
      <a href={href} onClick={handleClick}>
        {children}
      </a>
  </S.ImageActive>
}

export default withRouter(ActiveImage);