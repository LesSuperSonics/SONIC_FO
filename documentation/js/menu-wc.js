'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">angular-material-admin documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AddCandidateModule.html" data-type="entity-link" >AddCandidateModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AddCandidateModule-b8c08e0ae7b8fc8af140ac665d6f80b80085512f70538aae8d095a25e3a636f690f03b04c93e290f2444d2d326fdadf6a3b3cfdb5bc951cef4d873f1165f2e3c"' : 'data-target="#xs-components-links-module-AddCandidateModule-b8c08e0ae7b8fc8af140ac665d6f80b80085512f70538aae8d095a25e3a636f690f03b04c93e290f2444d2d326fdadf6a3b3cfdb5bc951cef4d873f1165f2e3c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AddCandidateModule-b8c08e0ae7b8fc8af140ac665d6f80b80085512f70538aae8d095a25e3a636f690f03b04c93e290f2444d2d326fdadf6a3b3cfdb5bc951cef4d873f1165f2e3c"' :
                                            'id="xs-components-links-module-AddCandidateModule-b8c08e0ae7b8fc8af140ac665d6f80b80085512f70538aae8d095a25e3a636f690f03b04c93e290f2444d2d326fdadf6a3b3cfdb5bc951cef4d873f1165f2e3c"' }>
                                            <li class="link">
                                                <a href="components/AddCandidateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddCandidateComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AddCandidateRoutingModule.html" data-type="entity-link" >AddCandidateRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-71cbc4054636db527e6e3b0e6780f7848b19bbb4ec0f51cb2e9a7cecb2ed21a3d86fd6dc1dd7dd542627d915fb17fe9f7bebde95327dad97544c36a05b3315b6"' : 'data-target="#xs-components-links-module-AdminModule-71cbc4054636db527e6e3b0e6780f7848b19bbb4ec0f51cb2e9a7cecb2ed21a3d86fd6dc1dd7dd542627d915fb17fe9f7bebde95327dad97544c36a05b3315b6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-71cbc4054636db527e6e3b0e6780f7848b19bbb4ec0f51cb2e9a7cecb2ed21a3d86fd6dc1dd7dd542627d915fb17fe9f7bebde95327dad97544c36a05b3315b6"' :
                                            'id="xs-components-links-module-AdminModule-71cbc4054636db527e6e3b0e6780f7848b19bbb4ec0f51cb2e9a7cecb2ed21a3d86fd6dc1dd7dd542627d915fb17fe9f7bebde95327dad97544c36a05b3315b6"' }>
                                            <li class="link">
                                                <a href="components/LayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SideNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SideNavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TopNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TopNavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-22955174242a14ed98e91b110d47c2d6435f15d3976b838bd1661aaf2ec6722d046178daa13560facf648e535a27fe50e4c3ea6b0b143d9689c8224679bce78c"' : 'data-target="#xs-components-links-module-AppModule-22955174242a14ed98e91b110d47c2d6435f15d3976b838bd1661aaf2ec6722d046178daa13560facf648e535a27fe50e4c3ea6b0b143d9689c8224679bce78c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-22955174242a14ed98e91b110d47c2d6435f15d3976b838bd1661aaf2ec6722d046178daa13560facf648e535a27fe50e4c3ea6b0b143d9689c8224679bce78c"' :
                                            'id="xs-components-links-module-AppModule-22955174242a14ed98e91b110d47c2d6435f15d3976b838bd1661aaf2ec6722d046178daa13560facf648e535a27fe50e4c3ea6b0b143d9689c8224679bce78c"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ChartsModule.html" data-type="entity-link" >ChartsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ChartsModule-12bbc749b29dfd43945a38ebcbdbd207f041f58cb14542f7049c0fc25c17f96d5446fe26ab9f31b6f13bd12535ecb96cc1ef04463d6274dd8f507c125ff691c3"' : 'data-target="#xs-components-links-module-ChartsModule-12bbc749b29dfd43945a38ebcbdbd207f041f58cb14542f7049c0fc25c17f96d5446fe26ab9f31b6f13bd12535ecb96cc1ef04463d6274dd8f507c125ff691c3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChartsModule-12bbc749b29dfd43945a38ebcbdbd207f041f58cb14542f7049c0fc25c17f96d5446fe26ab9f31b6f13bd12535ecb96cc1ef04463d6274dd8f507c125ff691c3"' :
                                            'id="xs-components-links-module-ChartsModule-12bbc749b29dfd43945a38ebcbdbd207f041f58cb14542f7049c0fc25c17f96d5446fe26ab9f31b6f13bd12535ecb96cc1ef04463d6274dd8f507c125ff691c3"' }>
                                            <li class="link">
                                                <a href="components/BarChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BarChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DonutChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DonutChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LineChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LineChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PieChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PieChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PolarChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PolarChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RadarChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RadarChartComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ChartsModule-12bbc749b29dfd43945a38ebcbdbd207f041f58cb14542f7049c0fc25c17f96d5446fe26ab9f31b6f13bd12535ecb96cc1ef04463d6274dd8f507c125ff691c3"' : 'data-target="#xs-injectables-links-module-ChartsModule-12bbc749b29dfd43945a38ebcbdbd207f041f58cb14542f7049c0fc25c17f96d5446fe26ab9f31b6f13bd12535ecb96cc1ef04463d6274dd8f507c125ff691c3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ChartsModule-12bbc749b29dfd43945a38ebcbdbd207f041f58cb14542f7049c0fc25c17f96d5446fe26ab9f31b6f13bd12535ecb96cc1ef04463d6274dd8f507c125ff691c3"' :
                                        'id="xs-injectables-links-module-ChartsModule-12bbc749b29dfd43945a38ebcbdbd207f041f58cb14542f7049c0fc25c17f96d5446fe26ab9f31b6f13bd12535ecb96cc1ef04463d6274dd8f507c125ff691c3"' }>
                                        <li class="link">
                                            <a href="injectables/DataService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChartsRoutingModule.html" data-type="entity-link" >ChartsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-7631ad319f734c50b0ede639546ed57a97f6c0809fc7ee4a508b3d7f2a6bb8f1c7db890998550638b15d50af7473db55dde00e9cd209bdd3c55194ba142696d2"' : 'data-target="#xs-components-links-module-DashboardModule-7631ad319f734c50b0ede639546ed57a97f6c0809fc7ee4a508b3d7f2a6bb8f1c7db890998550638b15d50af7473db55dde00e9cd209bdd3c55194ba142696d2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-7631ad319f734c50b0ede639546ed57a97f6c0809fc7ee4a508b3d7f2a6bb8f1c7db890998550638b15d50af7473db55dde00e9cd209bdd3c55194ba142696d2"' :
                                            'id="xs-components-links-module-DashboardModule-7631ad319f734c50b0ede639546ed57a97f6c0809fc7ee4a508b3d7f2a6bb8f1c7db890998550638b15d50af7473db55dde00e9cd209bdd3c55194ba142696d2"' }>
                                            <li class="link">
                                                <a href="components/StatComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link" >DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FormsModule.html" data-type="entity-link" >FormsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormsModule-066218154275530627ae27d2823bd2dcc9ce5c2c2283636ad13c0bc2faa123a2ae833743a325b03addde33d4b38217ddbdc862fd9df3f3dc47514304d167f6f1"' : 'data-target="#xs-components-links-module-FormsModule-066218154275530627ae27d2823bd2dcc9ce5c2c2283636ad13c0bc2faa123a2ae833743a325b03addde33d4b38217ddbdc862fd9df3f3dc47514304d167f6f1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormsModule-066218154275530627ae27d2823bd2dcc9ce5c2c2283636ad13c0bc2faa123a2ae833743a325b03addde33d4b38217ddbdc862fd9df3f3dc47514304d167f6f1"' :
                                            'id="xs-components-links-module-FormsModule-066218154275530627ae27d2823bd2dcc9ce5c2c2283636ad13c0bc2faa123a2ae833743a325b03addde33d4b38217ddbdc862fd9df3f3dc47514304d167f6f1"' }>
                                            <li class="link">
                                                <a href="components/AutoCompleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AutoCompleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CheckboxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CheckboxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DatepickerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatepickerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InputsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OtherComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OtherComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectedValueComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectedValueComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SliderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SliderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StatesGroupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatesGroupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormsRoutingModule.html" data-type="entity-link" >FormsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-a733f305e95d7bf623e475b001140fd9b2c9ef96d4f7cd2b09afa098f3835252103272a0612831310c6fd585b1864a90d3fd7b51a7c8876a8d24747ab6977648"' : 'data-target="#xs-components-links-module-LoginModule-a733f305e95d7bf623e475b001140fd9b2c9ef96d4f7cd2b09afa098f3835252103272a0612831310c6fd585b1864a90d3fd7b51a7c8876a8d24747ab6977648"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-a733f305e95d7bf623e475b001140fd9b2c9ef96d4f7cd2b09afa098f3835252103272a0612831310c6fd585b1864a90d3fd7b51a7c8876a8d24747ab6977648"' :
                                            'id="xs-components-links-module-LoginModule-a733f305e95d7bf623e475b001140fd9b2c9ef96d4f7cd2b09afa098f3835252103272a0612831310c6fd585b1864a90d3fd7b51a7c8876a8d24747ab6977648"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link" >LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-ec09d784180a979b0afdc04a379ae540cd89c75ed0c78e1052dd7cb0c356d4f2238b2ec8678003eca3a2036926d06c240855e99d08452949a6cafdafee13b129"' : 'data-target="#xs-components-links-module-SharedModule-ec09d784180a979b0afdc04a379ae540cd89c75ed0c78e1052dd7cb0c356d4f2238b2ec8678003eca3a2036926d06c240855e99d08452949a6cafdafee13b129"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-ec09d784180a979b0afdc04a379ae540cd89c75ed0c78e1052dd7cb0c356d4f2238b2ec8678003eca3a2036926d06c240855e99d08452949a6cafdafee13b129"' :
                                            'id="xs-components-links-module-SharedModule-ec09d784180a979b0afdc04a379ae540cd89c75ed0c78e1052dd7cb0c356d4f2238b2ec8678003eca3a2036926d06c240855e99d08452949a6cafdafee13b129"' }>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-ec09d784180a979b0afdc04a379ae540cd89c75ed0c78e1052dd7cb0c356d4f2238b2ec8678003eca3a2036926d06c240855e99d08452949a6cafdafee13b129"' : 'data-target="#xs-directives-links-module-SharedModule-ec09d784180a979b0afdc04a379ae540cd89c75ed0c78e1052dd7cb0c356d4f2238b2ec8678003eca3a2036926d06c240855e99d08452949a6cafdafee13b129"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-ec09d784180a979b0afdc04a379ae540cd89c75ed0c78e1052dd7cb0c356d4f2238b2ec8678003eca3a2036926d06c240855e99d08452949a6cafdafee13b129"' :
                                        'id="xs-directives-links-module-SharedModule-ec09d784180a979b0afdc04a379ae540cd89c75ed0c78e1052dd7cb0c356d4f2238b2ec8678003eca3a2036926d06c240855e99d08452949a6cafdafee13b129"' }>
                                        <li class="link">
                                            <a href="directives/RouterTab.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RouterTab</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/RouterTabs.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RouterTabs</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SignupModule.html" data-type="entity-link" >SignupModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SignupModule-1129e9ee2fd289a1d86448eee062621f3fb6912f83a44d3a6204acd69fdf989b4bb0980654b9aa87618695339712327e1918ce63e3ebfc1f13e0a12fe032133c"' : 'data-target="#xs-components-links-module-SignupModule-1129e9ee2fd289a1d86448eee062621f3fb6912f83a44d3a6204acd69fdf989b4bb0980654b9aa87618695339712327e1918ce63e3ebfc1f13e0a12fe032133c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SignupModule-1129e9ee2fd289a1d86448eee062621f3fb6912f83a44d3a6204acd69fdf989b4bb0980654b9aa87618695339712327e1918ce63e3ebfc1f13e0a12fe032133c"' :
                                            'id="xs-components-links-module-SignupModule-1129e9ee2fd289a1d86448eee062621f3fb6912f83a44d3a6204acd69fdf989b4bb0980654b9aa87618695339712327e1918ce63e3ebfc1f13e0a12fe032133c"' }>
                                            <li class="link">
                                                <a href="components/SignupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SignupRoutingModule.html" data-type="entity-link" >SignupRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TablesModule.html" data-type="entity-link" >TablesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TablesModule-d8c258cce81dadde3ac63eed57d62892eb3bf455e7498b234d72cbbe21a25401aff3a510075d00d48d91ad4b4ce95f6c697ffb1ce653a02de05935e99b3c8dcc"' : 'data-target="#xs-components-links-module-TablesModule-d8c258cce81dadde3ac63eed57d62892eb3bf455e7498b234d72cbbe21a25401aff3a510075d00d48d91ad4b4ce95f6c697ffb1ce653a02de05935e99b3c8dcc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TablesModule-d8c258cce81dadde3ac63eed57d62892eb3bf455e7498b234d72cbbe21a25401aff3a510075d00d48d91ad4b4ce95f6c697ffb1ce653a02de05935e99b3c8dcc"' :
                                            'id="xs-components-links-module-TablesModule-d8c258cce81dadde3ac63eed57d62892eb3bf455e7498b234d72cbbe21a25401aff3a510075d00d48d91ad4b4ce95f6c697ffb1ce653a02de05935e99b3c8dcc"' }>
                                            <li class="link">
                                                <a href="components/SearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TablesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TablesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TablesModule-d8c258cce81dadde3ac63eed57d62892eb3bf455e7498b234d72cbbe21a25401aff3a510075d00d48d91ad4b4ce95f6c697ffb1ce653a02de05935e99b3c8dcc"' : 'data-target="#xs-injectables-links-module-TablesModule-d8c258cce81dadde3ac63eed57d62892eb3bf455e7498b234d72cbbe21a25401aff3a510075d00d48d91ad4b4ce95f6c697ffb1ce653a02de05935e99b3c8dcc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TablesModule-d8c258cce81dadde3ac63eed57d62892eb3bf455e7498b234d72cbbe21a25401aff3a510075d00d48d91ad4b4ce95f6c697ffb1ce653a02de05935e99b3c8dcc"' :
                                        'id="xs-injectables-links-module-TablesModule-d8c258cce81dadde3ac63eed57d62892eb3bf455e7498b234d72cbbe21a25401aff3a510075d00d48d91ad4b4ce95f6c697ffb1ce653a02de05935e99b3c8dcc"' }>
                                        <li class="link">
                                            <a href="injectables/DataService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TablesRoutingModule.html" data-type="entity-link" >TablesRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/HomeComponent-1.html" data-type="entity-link" >HomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomeComponent-2.html" data-type="entity-link" >HomeComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/MyErrorStateMatcher.html" data-type="entity-link" >MyErrorStateMatcher</a>
                            </li>
                            <li class="link">
                                <a href="classes/MyErrorStateMatcher-1.html" data-type="entity-link" >MyErrorStateMatcher</a>
                            </li>
                            <li class="link">
                                <a href="classes/MyErrorStateMatcher-2.html" data-type="entity-link" >MyErrorStateMatcher</a>
                            </li>
                            <li class="link">
                                <a href="classes/NavLink.html" data-type="entity-link" >NavLink</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CandidateService.html" data-type="entity-link" >CandidateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChartService.html" data-type="entity-link" >ChartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataService.html" data-type="entity-link" >DataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataService-1.html" data-type="entity-link" >DataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenStorageService.html" data-type="entity-link" >TokenStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link" >AuthInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Animal.html" data-type="entity-link" >Animal</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Candidate.html" data-type="entity-link" >Candidate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Food.html" data-type="entity-link" >Food</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Place.html" data-type="entity-link" >Place</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Pokemon.html" data-type="entity-link" >Pokemon</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PokemonGroup.html" data-type="entity-link" >PokemonGroup</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StateGroup.html" data-type="entity-link" >StateGroup</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserData.html" data-type="entity-link" >UserData</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});