﻿$axure.loadDocument(
(function() {
    var _ = function() { var r={},a=arguments; for(var i=0; i<a.length; i+=2) r[a[i]]=a[i+1]; return r; }
    var _creator = function() { return _(b,_(c,d,e,f,g,d,h,d,i,d,j,k,l,d,m,f,n,f,o,d,p,f),q,_(r,[_(s,t,u,v,w,x,y,z)]),A,[B,C,D],E,[F,G,H],I,_(J,K),L,_(M,_(s,N,O,P,Q,R,S,T,U,V,W,_(X,Y,Z,ba,bb,bc),bd,be,bf,f,bg,bh,bi,T,bj,bk,bl,f,bm,_(bn,bo,bp,bo),bq,_(br,bo,bs,bo),bt,d,bu,f,bv,N,bw,_(X,Y,Z,bx),by,_(X,Y,Z,bz),bA,bB,bC,Y,bb,bB,bD,bE,bF,bG,bH,bI,bJ,bI,bK,bI,bL,bI,bM,_(),bN,null,bO,null,bP,bE,bQ,_(bR,f,bS,bT,bU,bT,bV,bT,Z,_(bW,bX,bY,bX,bZ,bX,ca,cb)),cc,_(bR,f,bS,bo,bU,bT,bV,bT,Z,_(bW,bX,bY,bX,bZ,bX,ca,cb)),cd,_(bR,f,bS,bc,bU,bc,bV,bT,Z,_(bW,bX,bY,bX,bZ,bX,ca,ce)),cf,cg),ch,_(ci,_(s,cj),ck,_(s,cl,bA,bE,bw,_(X,Y,Z,cm)),cn,_(s,co),cp,_(s,cq),bN,_(s,cr,bA,bE),cs,_(s,ct,bd,cu,Q,cv,bA,bE,bw,_(X,Y,Z,cw),bg,cx,bF,cy,bH,bE,bJ,bE,bK,bE,bL,bE),cz,_(s,cA,bd,cB,Q,cv,bA,bE,bw,_(X,Y,Z,cw),bg,cx,bF,cy,bH,bE,bJ,bE,bK,bE,bL,bE),cC,_(s,cD,bd,cE,Q,cv,bA,bE,bw,_(X,Y,Z,cw),bg,cx,bF,cy,bH,bE,bJ,bE,bK,bE,bL,bE),cF,_(s,cG,bd,cH,Q,cv,bA,bE,bw,_(X,Y,Z,cw),bg,cx,bF,cy,bH,bE,bJ,bE,bK,bE,bL,bE),cI,_(s,cJ,Q,cv,bA,bE,bw,_(X,Y,Z,cw),bg,cx,bF,cy,bH,bE,bJ,bE,bK,bE,bL,bE),cK,_(s,cL,bd,cM,Q,cv,bA,bE,bw,_(X,Y,Z,cw),bg,cx,bF,cy,bH,bE,bJ,bE,bK,bE,bL,bE),cN,_(s,cO,bA,bE,bw,_(X,Y,Z,cw),bg,cx,bF,cy,bH,bE,bJ,bE,bK,bE,bL,bE),cP,_(s,cQ,W,_(X,Y,Z,cR,bb,bc)),cS,_(s,cT,bw,_(X,Y,Z,cU)),cV,_(s,cW,bw,_(X,cX,cY,_(bn,cZ,bp,bo),da,_(bn,cZ,bp,bc),db,[_(Z,bx,dc,bo),_(Z,cm,dc,bo),_(Z,dd,dc,bc),_(Z,bx,dc,bc)])),de,_(s,df,by,_(X,Y,Z,dg),bA,bI)),dh,_()));}; 
var b="configuration",c="showPageNotes",d=true,e="showPageNoteNames",f=false,g="showAnnotations",h="showAnnotationsSidebar",i="showConsole",j="linkStyle",k="displayMultipleTargetsOnly",l="linkFlowsToPages",m="linkFlowsToPagesNewWindow",n="useLabels",o="useViews",p="loadFeedbackPlugin",q="sitemap",r="rootNodes",s="id",t="mpnkwt",u="pageName",v="xiaojiang",w="type",x="Wireframe",y="url",z="xiaojiang.html",A="additionalJs",B="plugins/sitemap/sitemap.js",C="plugins/page_notes/page_notes.js",D="plugins/debug/debug.js",E="additionalCss",F="plugins/sitemap/styles/sitemap.css",G="plugins/page_notes/styles/page_notes.css",H="plugins/debug/styles/debug.css",I="globalVariables",J="onloadvariable",K="",L="stylesheet",M="defaultStyle",N="627587b6038d43cca051c114ac41ad32",O="fontName",P="'ArialMT', 'Arial'",Q="fontWeight",R="400",S="fontStyle",T="normal",U="fontStretch",V="5",W="foreGroundFill",X="fillType",Y="solid",Z="color",ba=0xFF333333,bb="opacity",bc=1,bd="fontSize",be="13px",bf="underline",bg="horizontalAlignment",bh="center",bi="lineSpacing",bj="letterCase",bk="none",bl="strikethrough",bm="location",bn="x",bo=0,bp="y",bq="size",br="width",bs="height",bt="visible",bu="limbo",bv="baseStyle",bw="fill",bx=0xFFFFFFFF,by="borderFill",bz=0xFF797979,bA="borderWidth",bB="1",bC="linePattern",bD="cornerRadius",bE="0",bF="verticalAlignment",bG="middle",bH="paddingLeft",bI="2",bJ="paddingTop",bK="paddingRight",bL="paddingBottom",bM="stateStyles",bN="image",bO="imageFilter",bP="rotation",bQ="outerShadow",bR="on",bS="offsetX",bT=5,bU="offsetY",bV="blurRadius",bW="r",bX=0,bY="g",bZ="b",ca="a",cb=0.349019607843137,cc="innerShadow",cd="textShadow",ce=0.647058823529412,cf="viewOverride",cg="19e82109f102476f933582835c373474",ch="customStyles",ci="box_1",cj="4b7bfc596114427989e10bb0b557d0ce",ck="box_2",cl="47641f9a00ac465095d6b672bbdffef6",cm=0xFFF2F2F2,cn="ellipse",co="eff044fe6497434a8c5f89f769ddde3b",cp="shape",cq="40519e9ec4264601bfb12c514e4f4867",cr="75a91ee5b9d042cfa01b8d565fe289c0",cs="heading_1",ct="1111111151944dfba49f67fd55eb1f88",cu="32px",cv="bold",cw=0xFFFFFF,cx="left",cy="top",cz="heading_2",cA="b3a15c9ddde04520be40f94c8168891e",cB="24px",cC="heading_3",cD="8c7a4c5ad69a4369a5f7788171ac0b32",cE="18px",cF="heading_4",cG="e995c891077945c89c0b5fe110d15a0b",cH="14px",cI="heading_5",cJ="386b19ef4be143bd9b6c392ded969f89",cK="heading_6",cL="fc3b9a13b5574fa098ef0a1db9aac861",cM="10px",cN="paragraph",cO="4988d43d80b44008a4a415096f1632af",cP="form_hint",cQ="4889d666e8ad4c5e81e59863039a5cc0",cR=0xFF999999,cS="form_disabled",cT="9bd0236217a94d89b0314c8c7fc75f16",cU=0xFFF0F0F0,cV="flow_shape",cW="df01900e3c4e43f284bafec04b0864c4",cX="linearGradient",cY="startPoint",cZ=0.5,da="endPoint",db="stops",dc="offset",dd=0xFFE4E4E4,de="connector",df="699a012e142a4bcba964d96e88b88bdf",dg=0xFF0099CC,dh="duplicateStyles";
return _creator();
})());