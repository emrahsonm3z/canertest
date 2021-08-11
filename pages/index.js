import Layout from '@/components/layout'
import Meta from '@/components/meta'
import { HOST } from '@/constants'

export default function Home() {
  return (
    <Layout>
      <Meta
        title="Next.js starter"
        desc="Generated by create next app"
        canonical={HOST}
      />

      <div className="container">Welcome</div>
    </Layout>
  )
}