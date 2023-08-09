import Page from "./freepage";
import {
  batch,
  Fade,
  Animator,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  StickyIn,
  FadeIn,
  ZoomIn,
} from "react-scroll-motion";
import "./PlasticDetection.css";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Sticky());
export default function PlasticDetection() {
  return (
    <div className="App">
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
            <h1>Hello</h1>
            <h1>I'm Ishan</h1>
            <p>I am a freelancer web developer.</p>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={ZoomInScrollOut}>
            <h1>Second scroll animation</h1>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <h1>I am FadeUp</h1>
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <div className="section-1">
            <Animator animation={ZoomIn()}>
              <div className="left">
                <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80" />
              </div>
            </Animator>
            <div className="right">
              <Animator animation={FadeIn()}>
                <h2>Pinewood Sofa</h2>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </Animator>
            </div>
          </div>
        </ScrollPage>
        <ScrollPage page={4}>
          <Animator animation={FadeIn()}>
            <Page />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}
