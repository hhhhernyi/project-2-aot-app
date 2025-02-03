import videoImg from '../assets/images/video.png'
import mangaImg from '../assets/images/book.png'



export default function HomePage() {
    return (
        <>
            <div className="externalLinks">
                <div className="externalLinksSub">
                    <img src={videoImg} className='homepageImg'/>
                    <p>Click <a href="https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan?srsltid=AfmBOor5bGpIihIo_1BvkUTLWIRbSnHnzWd0Siudjhjwp_oZ8sX7sG_-" target="_blank" className='clickHere'>here</a> to watch the anime!</p>
                </div>
                <div className="externalLinksSub"> 
                    <img src={mangaImg} className='homepageImg'/>
                    <p>Click <a href="https://w22.read-attackontitan-manga.com/manga/attack-on-titan-chapter-1/" target="_blank" className='clickHere'>here</a> to read the manga!</p>
                </div>
            </div>
            
            <div className='synopsisDiv'>
                <p className='synopsisTitle'>Synopsis</p>
                <p className='synopsisText'>"That day, the human race remembered the terror of being dominated by them, and the shame of being held captive in a birdcage..." — Over 100 years ago, a natural predator of humanity appeared: the Titans, giant humanoid but mindless monsters whose sole purpose of existence seemed to be to devour humans. There was an insurmountable gap in power between them and mankind, and as a result, humanity was rapidly exterminated to the brink of extinction. The survivors responded by constructing three concentric walls: Wall Maria, Wall Rose and Wall Sina, which graced them with a century of peace. However, one day a Colossal Titan far larger than any other seen before breached the outer wall, allowing the smaller Titans to invade the human territory and forcing the survivors to retreat to the inner walls. Eren Jaeger, a boy whose mother was eaten during the invasion, vowed to wipe every last Titan off the face of the Earth, and joined the military determined to exact his revenge.</p>
            </div>
            <footer id='footer'>
                <p>logo attributions</p>
                <p>Book by Pablo Rozenberg from <a href="https://thenounproject.com/browse/icons/term/book/" target="_blank" title="Book Icons">Noun Project</a> (CC BY 3.0)</p>
                <p>video streaming by ProSymbols from <a href="https://thenounproject.com/browse/icons/term/video-streaming/" target="_blank" title="video streaming Icons">Noun Project</a> (CC BY 3.0)</p>
            </footer>
            
        </>
    )
};
 