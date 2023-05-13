import Head from 'next/head';
import Link from 'next/link';
import Hero from '../components/Hero';
import Introduce from '../components/Introduce';
import Button from '../components/Button';
import DocumentIcon from '../components/DocumentIcon';
import BookIcon from '../components/BookIcon';

export default function Home() {
  return (
    <div className="container px-4">
      <Head>
        <title>평내중앙교회</title>
        <meta
          name="description"
          content="평내중앙교회는 여러분을 환영합니다."
        />
      </Head>

      <Hero>
        <Link href="/bulletins">
          <a>
            <Button>
              <span>주보</span>
              <DocumentIcon />
            </Button>
          </a>
        </Link>
        {/* <Link href="/bibles">
          <a>
            <Button outlined>
              <span>성경</span>
              <BookIcon />
            </Button>
          </a>
        </Link> */}
      </Hero>
      <Introduce />
    </div>
  );
}
