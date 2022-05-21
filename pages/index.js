import Link from 'next/link';
import Hero from '../components/Hero';
import Introduce from '../components/Introduce';
import Button from '../components/Button';
import DocumentIcon from '../components/DocumentIcon';
import BookIcon from '../components/BookIcon';

export default function Home() {
  return (
    <>
      <Hero>
        <Link href="/bulletins">
          <a>
            <Button>
              <span>주보</span>
              <DocumentIcon />
            </Button>
          </a>
        </Link>
        <Link href="/bulletins">
          <a>
            <Button outlined>
              <span>성경</span>
              <BookIcon />
            </Button>
          </a>
        </Link>
      </Hero>
      <Introduce />
    </>
  );
}
