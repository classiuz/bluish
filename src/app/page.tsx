import Link from 'next/link'
import Footer from '@/components/Footer'

import { MdArrowForward, MdArrowDownward, MdFormatQuote } from 'react-icons/md'

export const metadata = {
  title: 'Home - Bluish',
  description: 'Bluish an UI to make the things more easy',
}

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex h-[calc(100vh-64px-4rem)] flex-col items-center justify-between pt-44">
        <div className="flex flex-col items-center gap-4">
          <p className="relative inline-flex gap-1 text-5xl font-bold">
            <span className="absolute -left-12 -top-2 scale-x-[-1]">
              <MdFormatQuote />
            </span>
            <span>Make the things more easy</span>
            <span className="absolute -right-12 -top-2">
              <MdFormatQuote />
            </span>
          </p>
          <p className="text-center text-xl">
            Bluish an simple UI to make the things more easy for those quick projects.
            <br />
            Inspired in Material Design, created with Next.js and Tailwind.css
          </p>
          <Link
            href="/docs/getting-started/installation"
            className="inline-flex items-center gap-2 rounded-md bg-light-pri px-4 py-2 text-light-pri-on_pri shadow-lvl1 hover:shadow-lvl2 dark:bg-dark-pri dark:text-dark-pri-on_pri"
          >
            <p>Get Started</p>
            <span>
              <MdArrowForward />
            </span>
          </Link>
        </div>
        <a href="#content" className="animate-bounce py-4 text-4xl">
          <MdArrowDownward />
        </a>
      </div>
      <div className="flex flex-col gap-8">
        <section
          id="content"
          className="z-40 flex flex-col gap-4 border-t border-light-sur_var/50 bg-light-sur_var p-32 dark:border-dark-sur_var/50 dark:bg-dark-sur_var"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus, felis in placerat faucibus, lorem ex
            blandit dui, sed gravida magna felis ut dolor. Nunc rhoncus blandit cursus. Maecenas ut libero facilisis,
            euismod metus quis, lacinia ex. Nunc nunc lectus, interdum porttitor justo vel, aliquet sagittis ex. In hac
            habitasse platea dictumst. Praesent ultrices ornare dolor, id vehicula magna hendrerit ac. Sed ac orci
            tempus, euismod purus vitae, tincidunt dui. Nulla ut lobortis libero, vel scelerisque magna. Donec ipsum
            nibh, luctus et ultricies in, sodales ac tellus.
          </p>

          <p>
            Sed aliquet urna non mattis sodales. Vestibulum condimentum pulvinar metus in scelerisque. Sed dictum
            malesuada tristique. Aliquam ullamcorper augue nisi, vitae venenatis felis feugiat vitae. Morbi rhoncus
            sollicitudin venenatis. Proin a augue eget leo pellentesque ultricies. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Duis a eros urna. Maecenas faucibus aliquet metus, at luctus tellus feugiat at.
            Duis porttitor augue ut ultricies tempor. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>

          <p>
            Pellentesque et lacus viverra, imperdiet ante id, elementum dui. Quisque eget augue molestie, gravida magna
            eget, porta ante. Donec volutpat, quam id porta pellentesque, leo dolor sollicitudin nibh, accumsan
            tristique est leo quis quam. Etiam eu mi pretium, vehicula arcu quis, ultrices ipsum. Morbi volutpat cursus
            nisi eget rutrum. Duis sed sagittis velit. Nunc tellus libero, ultrices quis purus vitae, consequat laoreet
            arcu. Aenean porttitor hendrerit nisi. Maecenas leo arcu, blandit ut dui at, tristique fringilla est.
          </p>

          <ul className="list-disc p-8">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In consequatur vitae odit sequi, ipsam laboriosam
              asperiores veritatis deserunt sint quaerat corrupti incidunt aliquid. Iure quisquam expedita perspiciatis
              autem impedit neque.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ut? Dicta consequatur aliquam ipsum, velit
              vel repudiandae voluptas quidem quaerat? Nesciunt voluptatem, distinctio culpa voluptas consequatur
              accusamus nihil quis voluptate?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde placeat nihil tempore, temporibus error,
              delectus dicta eius, officia possimus veritatis consectetur sit? Laboriosam ducimus officiis, sapiente
              consequuntur ullam quo sed.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quibusdam quam velit eaque labore
              architecto, molestias eveniet veniam aspernatur officia temporibus omnis corporis quos odio, nisi deserunt
              ab animi. Animi.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam recusandae ducimus expedita rerum
              repellendus quae quibusdam quis blanditiis accusantium, sequi totam placeat iusto ipsum hic assumenda?
              Culpa, neque ipsum?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolor possimus vel mollitia ipsum
              veniam tenetur numquam quod est officiis magnam, iure totam libero harum eligendi doloremque earum fugit.
              Quasi?
            </li>
          </ul>

          <p>
            Integer pretium nisl in nibh consectetur pharetra. Donec accumsan lacus aliquet tellus pretium, a rhoncus
            turpis egestas. Nunc quis posuere eros. Nunc mollis justo quis feugiat vehicula. Mauris eget maximus lorem.
            Praesent et efficitur elit. Donec hendrerit nisl vitae neque interdum viverra. In porta pulvinar consequat.
            Morbi aliquam purus nec sem rutrum, in dictum lorem molestie. Praesent tristique quam nec nulla mattis, et
            eleifend lorem convallis. Donec vehicula eros in ultrices mollis. Nulla consequat, tellus ut efficitur
            rutrum, magna augue mollis lectus, quis hendrerit felis est non dolor. Duis pulvinar, elit eu blandit
            tempus, velit risus dignissim turpis, quis aliquam sapien justo in lectus. Sed a ligula porttitor,
            ullamcorper dui at, tempor massa. Ut in neque diam. Cras porta, lectus tempus suscipit pellentesque, erat
            nibh sodales erat, id dignissim neque velit at nibh.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis faucibus urna in bibendum. Phasellus
            sollicitudin felis at elit tincidunt venenatis. Aenean rhoncus scelerisque sapien, et consectetur nunc
            sodales quis. Vestibulum tortor magna, convallis non augue at, molestie tristique ante. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Phasellus eget fermentum nisi, sit amet consectetur risus.
            Maecenas nec lacus et ligula malesuada malesuada ac tristique tortor. In hac habitasse platea dictumst.
            Maecenas non ornare lacus. Aliquam a metus et mauris convallis iaculis at eget ipsum. Nulla venenatis luctus
            sem, quis faucibus neque volutpat quis. Nunc venenatis nisi a tellus suscipit cursus. Sed malesuada sapien
            non augue auctor facilisis. Proin placerat enim ac sapien rhoncus, et condimentum leo aliquam. Morbi
            suscipit nisl eu facilisis fermentum.
          </p>

          <p>
            Pellentesque et lacus viverra, imperdiet ante id, elementum dui. Quisque eget augue molestie, gravida magna
            eget, porta ante. Donec volutpat, quam id porta pellentesque, leo dolor sollicitudin nibh, accumsan
            tristique est leo quis quam. Etiam eu mi pretium, vehicula arcu quis, ultrices ipsum. Morbi volutpat cursus
            nisi eget rutrum. Duis sed sagittis velit. Nunc tellus libero, ultrices quis purus vitae, consequat laoreet
            arcu. Aenean porttitor hendrerit nisi. Maecenas leo arcu, blandit ut dui at, tristique fringilla est.
          </p>

          <p>
            Integer pretium nisl in nibh consectetur pharetra. Donec accumsan lacus aliquet tellus pretium, a rhoncus
            turpis egestas. Nunc quis posuere eros. Nunc mollis justo quis feugiat vehicula. Mauris eget maximus lorem.
            Praesent et efficitur elit. Donec hendrerit nisl vitae neque interdum viverra. In porta pulvinar consequat.
            Morbi aliquam purus nec sem rutrum, in dictum lorem molestie. Praesent tristique quam nec nulla mattis, et
            eleifend lorem convallis. Donec vehicula eros in ultrices mollis. Nulla consequat, tellus ut efficitur
            rutrum, magna augue mollis lectus, quis hendrerit felis est non dolor. Duis pulvinar, elit eu blandit
            tempus, velit risus dignissim turpis, quis aliquam sapien justo in lectus. Sed a ligula porttitor,
            ullamcorper dui at, tempor massa. Ut in neque diam. Cras porta, lectus tempus suscipit pellentesque, erat
            nibh sodales erat, id dignissim neque velit at nibh.
          </p>

          <p>
            Pellentesque et lacus viverra, imperdiet ante id, elementum dui. Quisque eget augue molestie, gravida magna
            eget, porta ante. Donec volutpat, quam id porta pellentesque, leo dolor sollicitudin nibh, accumsan
            tristique est leo quis quam. Etiam eu mi pretium, vehicula arcu quis, ultrices ipsum. Morbi volutpat cursus
            nisi eget rutrum. Duis sed sagittis velit. Nunc tellus libero, ultrices quis purus vitae, consequat laoreet
            arcu. Aenean porttitor hendrerit nisi. Maecenas leo arcu, blandit ut dui at, tristique fringilla est.
          </p>

          <p>
            Pellentesque et lacus viverra, imperdiet ante id, elementum dui. Quisque eget augue molestie, gravida magna
            eget, porta ante. Donec volutpat, quam id porta pellentesque, leo dolor sollicitudin nibh, accumsan
            tristique est leo quis quam. Etiam eu mi pretium, vehicula arcu quis, ultrices ipsum. Morbi volutpat cursus
            nisi eget rutrum. Duis sed sagittis velit. Nunc tellus libero, ultrices quis purus vitae, consequat laoreet
            arcu. Aenean porttitor hendrerit nisi. Maecenas leo arcu, blandit ut dui at, tristique fringilla est.
          </p>

          <p>
            Integer pretium nisl in nibh consectetur pharetra. Donec accumsan lacus aliquet tellus pretium, a rhoncus
            turpis egestas. Nunc quis posuere eros. Nunc mollis justo quis feugiat vehicula. Mauris eget maximus lorem.
            Praesent et efficitur elit. Donec hendrerit nisl vitae neque interdum viverra. In porta pulvinar consequat.
            Morbi aliquam purus nec sem rutrum, in dictum lorem molestie. Praesent tristique quam nec nulla mattis, et
            eleifend lorem convallis. Donec vehicula eros in ultrices mollis. Nulla consequat, tellus ut efficitur
            rutrum, magna augue mollis lectus, quis hendrerit felis est non dolor. Duis pulvinar, elit eu blandit
            tempus, velit risus dignissim turpis, quis aliquam sapien justo in lectus. Sed a ligula porttitor,
            ullamcorper dui at, tempor massa. Ut in neque diam. Cras porta, lectus tempus suscipit pellentesque, erat
            nibh sodales erat, id dignissim neque velit at nibh.
          </p>
        </section>
        <section id="about" className="z-40 flex flex-col gap-4 p-32">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus metus elit, ut efficitur nulla
            accumsan sed. Donec sed massa sodales enim pretium mattis non non lectus. In at mollis orci. Nulla volutpat
            convallis urna non porttitor. Pellentesque vitae felis vel libero laoreet sollicitudin. Aliquam blandit leo
            sed mattis interdum. In hendrerit, sem quis ultricies tristique, elit sapien semper ante, ac consectetur
            dolor tortor ac leo. Vestibulum fermentum ipsum justo, pellentesque vulputate diam tempus et.
          </p>

          <p>
            Nunc fermentum vitae ipsum sit amet vehicula. Donec vel nibh vitae nisl posuere sagittis. Vivamus aliquet
            tortor libero, ac tristique justo pulvinar sit amet. Sed at lorem ut sapien luctus maximus nec quis augue.
            Sed feugiat imperdiet ante, eget faucibus leo bibendum non. Pellentesque maximus lacus vitae est vestibulum,
            non tempor tortor aliquet. Phasellus maximus eros elementum turpis lobortis fringilla. Praesent at placerat
            arcu. Pellentesque iaculis est id erat pulvinar imperdiet.
          </p>

          <p>
            Proin iaculis, neque vel egestas tristique, felis tellus mollis tellus, scelerisque mattis libero ex at leo.
            Mauris vestibulum maximus arcu quis pharetra. Nulla nisi mi, lobortis ut euismod sit amet, fringilla nec
            felis. Aenean eu congue libero, ac tristique arcu. Maecenas sit amet mattis odio. Morbi varius nunc quis
            erat vestibulum ornare. Cras ac dui leo.
          </p>

          <p>
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis at libero orci. Praesent finibus nisi
            quis sem venenatis elementum. Suspendisse vulputate eleifend aliquam. Aliquam nec nibh luctus, sollicitudin
            arcu nec, lobortis nunc. Morbi malesuada, dolor eu consequat aliquam, libero dui mattis elit, ut porttitor
            purus tellus sed diam. Praesent porttitor volutpat nisl.
          </p>

          <p>
            Praesent pharetra lacus vitae augue consectetur fringilla. Aliquam ornare eget est eget dapibus. Nunc risus
            lorem, laoreet at nulla ac, pretium porta tellus. Aliquam ultricies leo eget aliquet rutrum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Integer vehicula venenatis nisi ac aliquet. Nulla eros felis,
            condimentum a ipsum a, tincidunt maximus ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <p>
            Curabitur non scelerisque nibh. Ut erat elit, venenatis gravida vehicula quis, egestas ac augue. Nullam et
            consectetur quam. Proin scelerisque posuere erat vel aliquam. Quisque aliquam molestie ex in luctus. Aenean
            sapien urna, finibus ut diam in, ultrices dignissim tortor. Mauris ut tellus ac augue imperdiet porta sit
            amet eget magna. Maecenas mattis diam et eros gravida, eu condimentum purus fermentum. Mauris sed magna a
            felis fermentum luctus in at ex. Sed sed mi semper, facilisis turpis sit amet, eleifend justo. Nam magna
            risus, consectetur id arcu non, tristique rutrum metus. Integer eget sem magna. Proin pretium felis sit amet
            metus mollis, vitae rhoncus enim rhoncus. Nam malesuada convallis metus, ultricies pharetra nisl imperdiet
            in.
          </p>

          <p>
            Sed a sem id quam accumsan tincidunt. Integer ut sem in magna semper dictum. Pellentesque faucibus id sem et
            dignissim. Aenean semper vehicula metus nec tempor. Phasellus tincidunt non tellus a commodo. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean pharetra ornare est. Nam
            sit amet dui volutpat, facilisis augue in, finibus mi. Cras mattis bibendum pharetra. Nunc maximus sit amet
            nisl et rutrum. Ut eu nulla vel lacus efficitur pharetra vel a nibh.
          </p>

          <p>
            Etiam in finibus tortor. Nulla quis pellentesque ligula. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Morbi convallis, libero at placerat condimentum, orci elit feugiat
            nibh, sed vehicula eros nisl et tortor. Nam non efficitur est, nec consequat dolor. Proin eu iaculis purus,
            at molestie ante. In dapibus felis quis arcu tempus, a bibendum nibh elementum. Mauris non libero interdum
            magna varius ornare. Suspendisse potenti. In vulputate, metus eu gravida mattis, arcu ipsum consectetur
            elit, ut commodo dui risus sit amet magna. Donec odio neque, vulputate eget dignissim vel, molestie a nunc.
            Duis in ipsum felis. Fusce in tincidunt libero. Sed tellus ante, finibus vulputate risus vel, ullamcorper
            maximus odio.
          </p>

          <p>
            Nulla nulla metus, porta sed molestie rhoncus, pharetra vel metus. Vivamus congue, ipsum quis varius
            egestas, massa magna porttitor justo, nec tristique tortor augue sed tellus. Aliquam at ligula nunc.
            Pellentesque ultricies et ipsum vitae blandit. Pellentesque lacinia eu sem nec venenatis. Suspendisse
            potenti. Etiam commodo suscipit lectus, a accumsan justo placerat id. Vivamus elementum sit amet est nec
            imperdiet. Curabitur porttitor nunc sit amet efficitur aliquet. Donec malesuada tortor non est rhoncus, et
            posuere purus ornare. Fusce ipsum ipsum, vulputate nec massa sed, pellentesque viverra lorem. Mauris ut mi
            sed lorem facilisis ultricies non nec diam. Suspendisse pellentesque ex ante, nec gravida tortor ornare eu.
            Integer blandit maximus lorem sed blandit. Aenean congue eu nulla sed suscipit. Vivamus pulvinar aliquam
            facilisis.
          </p>

          <p>
            Aenean lorem enim, gravida quis enim porta, lacinia scelerisque nunc. Etiam ultrices risus nulla, at semper
            augue dignissim eget. In risus felis, faucibus vel fermentum sit amet, facilisis sit amet dui. Sed orci ex,
            dapibus elementum ornare non, semper quis diam. Sed vulputate consectetur neque. Duis interdum vel mauris
            sit amet gravida. Aenean egestas arcu ac iaculis tristique. Integer congue, dui sit amet accumsan egestas,
            leo diam venenatis metus, vitae faucibus orci dui in sapien. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Nam vestibulum cursus lobortis. Fusce eleifend cursus elementum.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  )
}
