import { FC, Children, ReactNode } from "react";
import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";

const Organizer: FC<{ image: string, name: string, link: string, handle: string }> = ({ image, name, link, handle }) => (
    <SingleOrganizer>
        <img src={image} />
        <h3>{name}</h3>
        <a href={link}>{handle}</a>
    </SingleOrganizer>
)

const Faq: FC<{ heading: string, children: ReactNode }> = ({ heading, children }) => (
    <div style={{ margin: "30px 0px" }}>
        <Paragraph bold>{heading}</Paragraph>
        <Paragraph>{children}</Paragraph>
    </div>
)

const AboutPage: FC = () => (
    <div>
        <Head>
            <title>About — WebAssembly Summit</title>
        </Head>
        <Header>
            <Link href="/">Home</Link>
            <a href="#faq">FAQs</a>
        </Header>
        <AboutContainer>
            
            <ContentContainer primary id="faq">
                <Heading>FAQs</Heading>
                <Faq heading="Is this a community event?">Yes, the summit is organised by individual people in the WebAssembly community, and at the time of writing sponsored by Google and Mozilla.</Faq>
                <Faq heading="Who is organizing?">
                    The organizers are (in alphabetical order):
                    <ul>
                        <li>Aaron Turner</li>
                        <li>Ashley Williams</li>
                        <li>Michael Hablich</li>
                        <li>Surma</li>
                        <li>Thomas Tränkler</li>
                        <li>Till Schneidereit</li>
                    </ul>

                    With some help of some other awesome folks!

                </Faq>
                <Faq heading="Who can I contact?
">
    To get in contact with the summit organizers, please send an email to: <a href="mailto:wasm-summit-2020@chromium.org">wasm-summit-2020@chromium.org</a>

                </Faq>
                <Faq heading="Will it be livestreamed?">
                    Yes, the summit will be livestreamed on Youtube.
                </Faq>
                <Faq heading="Will the talks be recorded?">
                    Yes, the talks will be uploaded to Youtube.
                </Faq>
                <Faq heading="Does the event have a Code of Conduct?">
                    Yes, please see the <a href="https://github.com/WebAssemblySummit/webassemblysummit.github.io/blob/dev/CODE_OF_CONDUCT.md">Code of Conduct here</a>.
                </Faq>

            </ContentContainer>

        </AboutContainer>
    </div>
)

const Header = styled.div`
    display: flex;
    padding: 20px 0px;
    background: #3137c4;
    align-items: center;
    flex-direction: row;
    justify-content: center;

    width: 100%;
    position: sticky;
    top: 0;
    
    a {
        color: #fff;
        &:visited {
            color: #fff;
        }
        margin: 20px;
        font-size: 1.2em;
        text-decoration: underline;
    }

    @media (max-width: 480px) {
        a {
            margin: 10px;
            font-size: 1em;
        }
    }
`

const AboutContainer = styled.div`
    width: 100%;
    padding: 20px 0px;
    background-color: #fbfbfb;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e7eefb' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-opacity: 0.2;

`

const Heading = styled.h2`
    font-size: 2em;
    font-weight: 700;
`

const Paragraph = styled.p`
    font-size: 1.4em;
    margin: 5px 0px;
    padding: 0px;
    font-weight: ${(props: { bold?: boolean }) =>
        props.bold ? 700 : "normal"};
`

const Center = styled.div`
    text-align: center;
`

const ContentContainer = styled.div`
    background-color: ${(props: { primary?: boolean }) =>
        props.primary ? "#fff" : "transparent"};
    box-shadow: ${(props: { primary?: boolean }) =>
        props.primary ? "0px 5px 30px rgba(0,0,0,0.01)" : "0px"};
    color: #000;
    max-width: 960px;
    margin: 30px auto;
    padding: 20px 40px;
    border-radius: 5px;

    a {
        color: #3137c4;
        &:visited {
            color: #3137c4:
        }
    }

    @media (max-width: 768px) {
        padding: 10px 20px;
    }

`
const MapContainer = styled.div`
    width: 100%;
    margin-top: 30px;
    iframe {
            border: none;
        outline: none;
    }
`

const OrganizerContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    justify-items: center;
    a {
        color: #3137c4;
        &:visited {
            color: #3137c4:
        }
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`

const SingleOrganizer = styled.div`
    img {
            height: 250px;
        width: 250px;
        padding: 10px;
        border: 1px dashed rgba(0,0,0,0.3);
        object-fit: cover;
    }
    h3 {
            padding: 0px;
        margin: 0px;
        margin-top: 10px
    }
    margin: 10px 0px;
`


export default AboutPage;