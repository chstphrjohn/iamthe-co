import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import {StaticQuery, graphql} from "gatsby"
import {HelmetDatoCms} from 'gatsby-source-datocms'

import '../styles/index.sass'

const TemplateWrapper = ({children}) => (
    <StaticQuery query={graphql`
    query LayoutQuery
    {
      datoCmsSite {
        globalSeo {
          siteName
        }
        faviconMetaTags {
          ...GatsbyDatoCmsFaviconMetaTags
        }
      }
      datoCmsHome {
        seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
        introTextNode {
          childMarkdownRemark {
            html
          }
        }
        copyright
      }
      allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
        edges {
          node {
            profileType
            url
          }
        }
      }
    }
  `}
                 render={data => (
                     <div className="container">
                         <HelmetDatoCms
                             favicon={data.datoCmsSite.faviconMetaTags}
                             seo={data.datoCmsHome.seoMetaTags}
                         />
                         <div className="container__sidebar">
                             <div className="sidebar">
                                 {/* <h6 className="sidebar__title">
            <Link to="/">the <span>Connoisseur.</span></Link>
          </h6> */}
                                 {/* <Link to="/" className="site_logo"><img src={"https://www.datocms-assets.com/18840/1575041843-connoisseurlogo.png"}/></Link> */}

                                 <Link to="/" className="site_logo"><img
                                     src={"https://www.datocms-assets.com/18840/1578659827-iamthe.png"}/></Link>
                                 {/* <Link to="/" className="site_logo"><img src={"https://www.datocms-assets.com/18840/1578608261-theconno-isseur.png"}/></Link>
            <Link to="/" className="site_logo"><img src={"https://www.datocms-assets.com/18840/1578608679-iam.png"}/></Link> */}
                                 <div
                                     className="sidebar__intro"
                                     dangerouslySetInnerHTML={{
                                         __html: data.datoCmsHome.introTextNode.childMarkdownRemark.html,
                                     }}
                                 />
                                 {/*<p className="sidebar__social">*/}
                                 {/*  {data.allDatoCmsSocialProfile.edges.map(({ node: profile }) => (*/}
                                 {/*    <a*/}
                                 {/*      key={profile.profileType}*/}
                                 {/*      href={profile.url}*/}
                                 {/*      target="blank"*/}
                                 {/*      className={`social social--${profile.profileType.toLowerCase()}`}*/}
                                 {/*    > </a>*/}
                                 {/*  ))}*/}
                                 {/*</p>*/}
                                 <div className="sidebar__copyright">{data.datoCmsHome.copyright}</div>

                                 <ul className="sidebar__menu">
                                     <li>
                                         <Link to="/">Home.</Link>
                                     </li>
                                     <li>
                                         <Link to="/about">About.</Link>
                                     </li>
                                 </ul>

                             </div>
                         </div>
                         <div className="container__body">
                             <div className="container__mobile-header">
                                 <div className="mobile-header">
                                     {/*<div className="mobile-header__menu">*/}
                                     {/*    <Link to="#" data-js="toggleSidebar"/>*/}
                                     {/*</div>*/}
                                     <ul className="mobile_link">
                                         <li>
                                             <Link to="/">
                                                 {/*<img src={"https://www.datocms-assets.com/18840/1575046449-iconfinderhouse384890.svg"}/>*/}
                                                 {/*<img src={"https://www.datocms-assets.com/18840/1579863172-iconfinderhome216242.svg"}/>*/}
                                                 <img src={"https://www.datocms-assets.com/18840/1579863173-iconfinderhomehouse62874.png"}/>
                                             </Link>
                                         </li>
                                     </ul>

                                     {/*<div className="mobile-menu">*/}

                                     {/*    <ul className="sidebar__menu">*/}
                                     {/*        <li>*/}
                                     {/*            <Link to="/">Home.</Link>*/}
                                     {/*        </li>*/}
                                     {/*        <li>*/}
                                     {/*            <Link to="/about">About.</Link>*/}
                                     {/*        </li>*/}
                                     {/*    </ul>*/}

                                     {/*</div>*/}

                                     <div className="mobile-header__logo">
                                         {/* <Link to="/">the <span>Connoisseur.</span></Link> */}
                                         {/*<Link to="/">{data.datoCmsSite.globalSeo.siteName}</Link>*/}
                                         <Link to="/" className="site_logo"><img
                                             src={"https://www.datocms-assets.com/18840/1578659827-iamthe.png"}/></Link>
                                     </div>
                                 </div>
                             </div>
                             {children}
                         </div>
                     </div>
                 )}
    />
)

TemplateWrapper.propTypes = {
    children: PropTypes.object,
}

export default TemplateWrapper

