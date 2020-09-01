import { css } from 'lit-element';

/*
This file is reserved for any custom css that developers want to add to
customize their theme. Simply add your css to this file and yarn build.
*/

export default css`
    .api-title {
        color: var(--blue);
        text-transform: uppercase;
        font-weight: 600;
    }
    
    .api-version {
        font-size: 32px;
        font-weight: 600;
    }
  
    .token.tag, .token.function, .token.punctuation, .token.keyword, .token.property { color: var(--purple); }
    .token.entity, .token.string { color: var(--green); }
    .token.constant { color: var(--blue) }
    .m-markdown pre { 
        background-color: var(--light-grey); 
        border: 1px solid;
        max-height: 300px;
     }
    .m-markdown pre code { 
        background-color: var(--light-grey); 
        color: var(--blue); 
    }
    schema-tree, json-tree {
        background-color: var(--light-grey); 
        border: 1px solid #c9d0d5;
        padding: 10px;
        display: block;
        max-height: var(--resp-area-height, 300px);
        overflow: auto;
    }
    
    .try-target {
        font-size: 14px;
    }
    
    .nav-bar { border-right: 1px solid #e5e5e5; }
    .nav-bar-tag, .nav-bar-info { font-size: 12px; font-weight: 800; background-color: var(--grey); padding: 10px; }
    .nav-bar-section, .nav-scroll hr { display: none; }
    .nav-bar-h1, .nav-bar-h2, .nav-bar-path { font-size: 12px; }
    .nav-bar-h2 { margin: 0px; padding-left: 22px; }
    .nav-bar-tag:not(:first-of-type){ border-top: 0px solid var(--nav-hover-bg-color); }

    .section-gap--read-mode { 
        padding: 48px 25px 24px 25px; 
    }

    .section-gap--focused-mode { 
        padding: 64px 25px 24px 25px; 
    }

    #link-authenticationZZZ { background-color: var(--nav-bg-color); font-size: 12px; font-weight: 400; }
    #nav-bar-search { 
        background-color: var(--nav-bg-color) 
    }

    a { 
        text-decoration: none; 
        font-weight: 800;
        color: var(--blue); 
    }

    h1, .sub-title { 
        background-color: var(--grey); 
        padding: 10px; 
        font-size: 18px; 
        font-weight: 600;
        scroll-margin-top: 80px; 
    }
    h2 { 
        font-size: 16px; 
        font-weight: 800; 
        scroll-margin-top: 70px; 
    }
    h3 { font-size: 14px; font-weight: 800; }

    .endpoint-summary {
        background-color: var(--grey); 
        padding: 10px; 
        font-size: 18px; 
        font-weight: 600;
    }
    
    .table-title {
        font-size: 16px;
        margin-top: 24px;
    }
    
    .response-message {
      font-size: 14px;
    }
    
    .response-box {
        max-height: var(--resp-area-height, 300px); 
    }
    
    .authenticated {
        border-color: var(--green);
    }
    
    .not-authenticated {
        border-color: var(--red);
    }

    .authentication-text {
        color: var(--green);
        font-weight: 600;
    }
    
    .expanded-endpoint-body {
        margin-bottom: 40px;
        scroll-margin-top: 70px;
    }
    
    #api-servers, #authentication, #overview {
        scroll-margin-top: 50px;
    }
    .title {
        font-weight: 600;
    }

`;
