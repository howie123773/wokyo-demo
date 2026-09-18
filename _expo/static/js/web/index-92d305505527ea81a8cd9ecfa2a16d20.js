__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var t=r(d[0]);Object.keys(t).forEach(function(n){'default'===n||Object.prototype.hasOwnProperty.call(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[n]}})})},2986,[2988]);
__d(function(e,t,n,s,o,i,a){"use strict";Object.defineProperty(i,'__esModule',{value:!0}),Object.defineProperty(i,"AIError",{enumerable:!0,get:function(){return O}}),Object.defineProperty(i,"AIErrorCode",{enumerable:!0,get:function(){return $}}),Object.defineProperty(i,"AIModel",{enumerable:!0,get:function(){return oe}}),Object.defineProperty(i,"AgentPlatformBackend",{enumerable:!0,get:function(){return Y}}),Object.defineProperty(i,"AnyOfSchema",{enumerable:!0,get:function(){return mt}}),Object.defineProperty(i,"ArraySchema",{enumerable:!0,get:function(){return ht}}),Object.defineProperty(i,"Backend",{enumerable:!0,get:function(){return j}}),Object.defineProperty(i,"BackendType",{enumerable:!0,get:function(){return H}}),Object.defineProperty(i,"BlockReason",{enumerable:!0,get:function(){return I}}),Object.defineProperty(i,"BooleanSchema",{enumerable:!0,get:function(){return ut}}),Object.defineProperty(i,"ChatSession",{enumerable:!0,get:function(){return Xe}}),Object.defineProperty(i,"ChatSessionBase",{enumerable:!0,get:function(){return qe}}),Object.defineProperty(i,"FinishReason",{enumerable:!0,get:function(){return w}}),Object.defineProperty(i,"FunctionCallingMode",{enumerable:!0,get:function(){return N}}),Object.defineProperty(i,"GenerativeModel",{enumerable:!0,get:function(){return et}}),Object.defineProperty(i,"GoogleAIBackend",{enumerable:!0,get:function(){return V}}),Object.defineProperty(i,"HarmBlockMethod",{enumerable:!0,get:function(){return y}}),Object.defineProperty(i,"HarmBlockThreshold",{enumerable:!0,get:function(){return _}}),Object.defineProperty(i,"HarmCategory",{enumerable:!0,get:function(){return R}}),Object.defineProperty(i,"HarmProbability",{enumerable:!0,get:function(){return A}}),Object.defineProperty(i,"HarmSeverity",{enumerable:!0,get:function(){return b}}),Object.defineProperty(i,"ImageConfigAspectRatio",{enumerable:!0,get:function(){return T}}),Object.defineProperty(i,"ImageConfigImageSize",{enumerable:!0,get:function(){return C}}),Object.defineProperty(i,"InferenceMode",{enumerable:!0,get:function(){return v}}),Object.defineProperty(i,"InferenceSource",{enumerable:!0,get:function(){return M}}),Object.defineProperty(i,"IntegerSchema",{enumerable:!0,get:function(){return lt}}),Object.defineProperty(i,"Language",{enumerable:!0,get:function(){return k}}),Object.defineProperty(i,"LiveGenerativeModel",{enumerable:!0,get:function(){return it}}),Object.defineProperty(i,"LiveResponseType",{enumerable:!0,get:function(){return G}}),Object.defineProperty(i,"LiveSession",{enumerable:!0,get:function(){return st}}),Object.defineProperty(i,"Modality",{enumerable:!0,get:function(){return P}}),Object.defineProperty(i,"NumberSchema",{enumerable:!0,get:function(){return dt}}),Object.defineProperty(i,"ObjectSchema",{enumerable:!0,get:function(){return ft}}),Object.defineProperty(i,"Outcome",{enumerable:!0,get:function(){return D}}),Object.defineProperty(i,"POSSIBLE_ROLES",{enumerable:!0,get:function(){return S}}),Object.defineProperty(i,"ResponseModality",{enumerable:!0,get:function(){return L}}),Object.defineProperty(i,"Schema",{enumerable:!0,get:function(){return ct}}),Object.defineProperty(i,"SchemaType",{enumerable:!0,get:function(){return F}}),Object.defineProperty(i,"StringSchema",{enumerable:!0,get:function(){return pt}}),Object.defineProperty(i,"TemplateGenerativeModel",{enumerable:!0,get:function(){return rt}}),Object.defineProperty(i,"ThinkingLevel",{enumerable:!0,get:function(){return U}}),Object.defineProperty(i,"URLRetrievalStatus",{enumerable:!0,get:function(){return x}}),Object.defineProperty(i,"VertexAIBackend",{enumerable:!0,get:function(){return B}}),Object.defineProperty(i,"getAI",{enumerable:!0,get:function(){return _t}}),Object.defineProperty(i,"getGenerativeModel",{enumerable:!0,get:function(){return At}}),Object.defineProperty(i,"getLiveGenerativeModel",{enumerable:!0,get:function(){return bt}}),Object.defineProperty(i,"getTemplateGenerativeModel",{enumerable:!0,get:function(){return It}}),Object.defineProperty(i,"startAudioConversation",{enumerable:!0,get:function(){return Rt}});var r=t(a[0]),c=t(a[1]),l=t(a[2]),d=t(a[3]),u="@firebase/ai",p="2.16.0";
/**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
const h='AI',f='firebasevertexai.googleapis.com',m='v1beta',g=p,E='gemini-2.5-flash-lite';
/**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
class O extends l.FirebaseError{constructor(e,t,n){const s=`${h}: ${t} (${`${h}/${e}`})`;super(e,s),this.code=e,this.customErrorData=n,Error.captureStackTrace&&Error.captureStackTrace(this,O),Object.setPrototypeOf(this,O.prototype),this.toString=()=>s}}
/**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const S=['user','model','function','system'],R={HARM_CATEGORY_HATE_SPEECH:'HARM_CATEGORY_HATE_SPEECH',HARM_CATEGORY_SEXUALLY_EXPLICIT:'HARM_CATEGORY_SEXUALLY_EXPLICIT',HARM_CATEGORY_HARASSMENT:'HARM_CATEGORY_HARASSMENT',HARM_CATEGORY_DANGEROUS_CONTENT:'HARM_CATEGORY_DANGEROUS_CONTENT'},_={BLOCK_LOW_AND_ABOVE:'BLOCK_LOW_AND_ABOVE',BLOCK_MEDIUM_AND_ABOVE:'BLOCK_MEDIUM_AND_ABOVE',BLOCK_ONLY_HIGH:'BLOCK_ONLY_HIGH',BLOCK_NONE:'BLOCK_NONE',OFF:'OFF'},y={SEVERITY:'SEVERITY',PROBABILITY:'PROBABILITY'},A={NEGLIGIBLE:'NEGLIGIBLE',LOW:'LOW',MEDIUM:'MEDIUM',HIGH:'HIGH'},b={HARM_SEVERITY_NEGLIGIBLE:'HARM_SEVERITY_NEGLIGIBLE',HARM_SEVERITY_LOW:'HARM_SEVERITY_LOW',HARM_SEVERITY_MEDIUM:'HARM_SEVERITY_MEDIUM',HARM_SEVERITY_HIGH:'HARM_SEVERITY_HIGH',HARM_SEVERITY_UNSUPPORTED:'HARM_SEVERITY_UNSUPPORTED'},I={SAFETY:'SAFETY',OTHER:'OTHER',BLOCKLIST:'BLOCKLIST',PROHIBITED_CONTENT:'PROHIBITED_CONTENT'},w={STOP:'STOP',MAX_TOKENS:'MAX_TOKENS',SAFETY:'SAFETY',RECITATION:'RECITATION',OTHER:'OTHER',BLOCKLIST:'BLOCKLIST',PROHIBITED_CONTENT:'PROHIBITED_CONTENT',SPII:'SPII',MALFORMED_FUNCTION_CALL:'MALFORMED_FUNCTION_CALL',IMAGE_SAFETY:'IMAGE_SAFETY',IMAGE_PROHIBITED_CONTENT:'IMAGE_PROHIBITED_CONTENT',IMAGE_OTHER:'IMAGE_OTHER',NO_IMAGE:'NO_IMAGE',IMAGE_RECITATION:'IMAGE_RECITATION',LANGUAGE:'LANGUAGE',UNEXPECTED_TOOL_CALL:'UNEXPECTED_TOOL_CALL',TOO_MANY_TOOL_CALLS:'TOO_MANY_TOOL_CALLS',MISSING_THOUGHT_SIGNATURE:'MISSING_THOUGHT_SIGNATURE',MALFORMED_RESPONSE:'MALFORMED_RESPONSE'},T={SQUARE_1x1:'1:1',PORTRAIT_9x16:'9:16',LANDSCAPE_16x9:'16:9',PORTRAIT_3x4:'3:4',LANDSCAPE_4x3:'4:3',PORTRAIT_2x3:'2:3',LANDSCAPE_3x2:'3:2',PORTRAIT_4x5:'4:5',LANDSCAPE_5x4:'5:4',PORTRAIT_1x4:'1:4',LANDSCAPE_4x1:'4:1',PORTRAIT_1x8:'1:8',LANDSCAPE_8x1:'8:1',ULTRAWIDE_21x9:'21:9'},C={SIZE_512:'512',SIZE_1K:'1K',SIZE_2K:'2K',SIZE_4K:'4K'},N={AUTO:'AUTO',ANY:'ANY',NONE:'NONE'},P={MODALITY_UNSPECIFIED:'MODALITY_UNSPECIFIED',TEXT:'TEXT',IMAGE:'IMAGE',VIDEO:'VIDEO',AUDIO:'AUDIO',DOCUMENT:'DOCUMENT'},L={TEXT:'TEXT',IMAGE:'IMAGE',AUDIO:'AUDIO'},v={PREFER_ON_DEVICE:'prefer_on_device',ONLY_ON_DEVICE:'only_on_device',ONLY_IN_CLOUD:'only_in_cloud',PREFER_IN_CLOUD:'prefer_in_cloud'},M={ON_DEVICE:'on_device',IN_CLOUD:'in_cloud'},D={UNSPECIFIED:'OUTCOME_UNSPECIFIED',OK:'OUTCOME_OK',FAILED:'OUTCOME_FAILED',DEADLINE_EXCEEDED:'OUTCOME_DEADLINE_EXCEEDED'},k={UNSPECIFIED:'LANGUAGE_UNSPECIFIED',PYTHON:'PYTHON'},U={MINIMAL:'MINIMAL',LOW:'LOW',MEDIUM:'MEDIUM',HIGH:'HIGH'},x={URL_RETRIEVAL_STATUS_UNSPECIFIED:'URL_RETRIEVAL_STATUS_UNSPECIFIED',URL_RETRIEVAL_STATUS_SUCCESS:'URL_RETRIEVAL_STATUS_SUCCESS',URL_RETRIEVAL_STATUS_ERROR:'URL_RETRIEVAL_STATUS_ERROR',URL_RETRIEVAL_STATUS_PAYWALL:'URL_RETRIEVAL_STATUS_PAYWALL',URL_RETRIEVAL_STATUS_UNSAFE:'URL_RETRIEVAL_STATUS_UNSAFE'},G={SERVER_CONTENT:'serverContent',TOOL_CALL:'toolCall',TOOL_CALL_CANCELLATION:'toolCallCancellation',GOING_AWAY_NOTICE:'goingAwayNotice',SESSION_RESUMPTION_UPDATE:'sessionResumptionUpdate'},$={ERROR:'error',REQUEST_ERROR:'request-error',RESPONSE_ERROR:'response-error',FETCH_ERROR:'fetch-error',SESSION_CLOSED:'session-closed',INVALID_CONTENT:'invalid-content',API_NOT_ENABLED:'api-not-enabled',INVALID_SCHEMA:'invalid-schema',NO_API_KEY:'no-api-key',NO_APP_ID:'no-app-id',NO_MODEL:'no-model',NO_PROJECT_ID:'no-project-id',PARSE_FAILED:'parse-failed',UNSUPPORTED:'unsupported'},F={STRING:'string',NUMBER:'number',INTEGER:'integer',BOOLEAN:'boolean',ARRAY:'array',OBJECT:'object'},H={AGENT_PLATFORM:'AGENT_PLATFORM',VERTEX_AI:'VERTEX_AI',GOOGLE_AI:'GOOGLE_AI'};
/**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
class j{constructor(e){this.backendType=e}}class V extends j{constructor(){super(H.GOOGLE_AI)}_getModelPath(e,t){return`/${m}/projects/${e}/${t}`}_getTemplatePath(e,t){return`/${m}/projects/${e}/templates/${t}`}}class B extends j{constructor(e){super(H.VERTEX_AI),this.location="us-central1",e&&(this.location=e)}_getModelPath(e,t){return`/${m}/projects/${e}/locations/${this.location}/${t}`}_getTemplatePath(e,t){return`/${m}/projects/${e}/locations/${this.location}/templates/${t}`}}class Y extends j{constructor(e){super(H.AGENT_PLATFORM),this.location="global",e&&(this.location=e)}_getModelPath(e,t){return`/${m}/projects/${e}/locations/${this.location}/${t}`}_getTemplatePath(e,t){return`/${m}/projects/${e}/locations/${this.location}/templates/${t}`}}
/**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function q(e){if(e instanceof V)return`${h}/googleai`;if(e instanceof B)return`${h}/vertexai/${e.location}`;if(e instanceof Y)return`${h}/agentplatform/${e.location}`;throw new O($.ERROR,`Invalid backend: ${JSON.stringify(e.backendType)}`)}function W(e){const t=e.split('/');if(t[0]!==h)throw new O($.ERROR,`Invalid instance identifier, unknown prefix '${t[0]}'`);switch(t[1]){case'vertexai':const n=t[2];if(!n)throw new O($.ERROR,`Invalid instance identifier, unknown location '${e}'`);return new B(n);case'agentplatform':const s=t[2];if(!s)throw new O($.ERROR,`Invalid instance identifier, unknown location '${e}'`);return new Y(s);case'googleai':return new V;default:throw new O($.ERROR,`Invalid instance identifier string: '${e}'`)}}
/**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const J=new d.Logger('@firebase/vertexai');var K;!(function(e){e.UNAVAILABLE="unavailable",e.DOWNLOADABLE="downloadable",e.DOWNLOADING="downloading",e.AVAILABLE="available"})(K||(K={}));
/**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
const Q={type:'text',languages:['en']},X=[Q,{type:'image'}],z=[Q];class Z{constructor(e,t,n){this.languageModelProvider=e,this.mode=t,this.downloadPromise=null,this.onDeviceParams={createOptions:{expectedInputs:X,expectedOutputs:z}},n&&(this.onDeviceParams=n,this.onDeviceParams.createOptions?(this.onDeviceParams.createOptions.expectedInputs||(this.onDeviceParams.createOptions.expectedInputs=X),this.onDeviceParams.createOptions.expectedOutputs||(this.onDeviceParams.createOptions.expectedOutputs=z)):this.onDeviceParams.createOptions={expectedInputs:X,expectedOutputs:z})}async isAvailable(e){if(!this.mode)return J.debug("On-device inference unavailable because mode is undefined."),!1;if(this.mode===v.ONLY_IN_CLOUD)return J.debug("On-device inference unavailable because mode is \"only_in_cloud\"."),!1;const t=await(this.languageModelProvider?.availability(this.onDeviceParams.createOptions));if(this.mode===v.ONLY_ON_DEVICE){if(t===K.UNAVAILABLE)throw new O($.API_NOT_ENABLED,'Local LanguageModel API not available in this environment.');if(t===K.DOWNLOADABLE||t===K.DOWNLOADING){J.debug("Waiting for download of LanguageModel to complete.");try{await this.downloadPromise}catch(e){throw new O($.ERROR,e.message)}return!0}return!0}return t!==K.AVAILABLE?(J.debug(`On-device inference unavailable because availability is "${t}".`),!1):!!Z.isOnDeviceRequest(e)||(J.debug("On-device inference unavailable because request is incompatible."),!1)}async generateContent(e){const t=await this.createSession(),n=await Promise.all(e.contents.map(Z.toLanguageModelMessage)),s=await t.prompt(n,this.onDeviceParams.promptOptions);return Z.toResponse(s)}async generateContentStream(e){const t=await this.createSession(),n=await Promise.all(e.contents.map(Z.toLanguageModelMessage)),s=t.promptStreaming(n,this.onDeviceParams.promptOptions);return Z.toStreamResponse(s)}async countTokens(e){throw new O($.REQUEST_ERROR,'Count Tokens is not yet available for on-device model.')}static isOnDeviceRequest(e){if(0===e.contents.length)return J.debug('Empty prompt rejected for on-device inference.'),!1;for(const t of e.contents){if(t.parts.some(e=>'functionResponse'in e))return J.debug("Content with a function response part rejected for on-device inference."),!1;for(const e of t.parts)if(e.inlineData&&-1===Z.SUPPORTED_MIME_TYPES.indexOf(e.inlineData.mimeType))return J.debug(`Unsupported mime type "${e.inlineData.mimeType}" rejected for on-device inference.`),!1}return!0}async downloadIfAvailable(e){const t=await(this.languageModelProvider?.availability(this.onDeviceParams.createOptions));return t!==K.DOWNLOADABLE&&t!==K.DOWNLOADING||this.download(e),t}download(e){if(this.downloadPromise)return;const t={...this.onDeviceParams.createOptions};t&&!t.monitor&&e&&(t.monitor=t=>{t.addEventListener('downloadprogress',t=>{e(t.loaded)})}),this.downloadPromise=this.languageModelProvider?.create(t).finally(()=>{this.downloadPromise=null})}static async toLanguageModelMessage(e){const t=await Promise.all(e.parts.map(Z.toLanguageModelMessageContent));return{role:Z.toLanguageModelMessageRole(e.role),content:t}}static async toLanguageModelMessageContent(e){if(e.text)return{type:'text',value:e.text};if(e.inlineData){const t=await fetch(`data:${e.inlineData.mimeType};base64,${e.inlineData.data}`),n=await t.blob();return{type:'image',value:await createImageBitmap(n)}}throw new O($.REQUEST_ERROR,"Processing of this Part type is not currently supported.")}static toLanguageModelMessageRole(e){return'model'===e?'assistant':'user'}async createSession(){if(!this.languageModelProvider)throw new O($.UNSUPPORTED,'Chrome AI requested for unsupported browser version.');const e=await this.languageModelProvider.create(this.onDeviceParams.createOptions);return this.oldSession&&this.oldSession.destroy(),this.oldSession=e,e}static toResponse(e){return{json:async()=>({candidates:[{content:{parts:[{text:e}]}}]})}}static toStreamResponse(e){const t=new TextEncoder;return{body:e.pipeThrough(new TransformStream({transform(e,n){const s=JSON.stringify({candidates:[{content:{role:'model',parts:[{text:e}]}}]});n.enqueue(t.encode(`data: ${s}\n\n`))}}))}}}function ee(e,t,n){const s=(t||(0,l.getGlobal)()).LanguageModel;if(s&&e)return new Z(s,e,n)}
/**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */Z.SUPPORTED_MIME_TYPES=['image/jpeg','image/png'];class te{constructor(e,t,n,s,o){this.app=e,this.backend=t,this.chromeAdapterFactory=o;const i=s?.getImmediate({optional:!0}),a=n?.getImmediate({optional:!0});this.auth=a||null,this.appCheck=i||null,this.location=t instanceof B||t instanceof Y?t.location:''}_delete(){return Promise.resolve()}set options(e){this._options=e}get options(){return this._options}}
/**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function ne(e,{instanceIdentifier:t}){if(!t)throw new O($.ERROR,'AIService instance identifier is undefined.');const n=W(t),s=e.getProvider('app').getImmediate(),o=e.getProvider('auth-internal'),i=e.getProvider('app-check-internal');return new te(s,n,o,i,ee)}
/**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function se(e){if(!e.app?.options?.apiKey)throw new O($.NO_API_KEY,"The \"apiKey\" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid API key.");if(!e.app?.options?.projectId)throw new O($.NO_PROJECT_ID,"The \"projectId\" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid project ID.");if(!e.app?.options?.appId)throw new O($.NO_APP_ID,"The \"appId\" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid app ID.");const t={apiKey:e.app.options.apiKey,project:e.app.options.projectId,appId:e.app.options.appId,automaticDataCollectionEnabled:e.app.automaticDataCollectionEnabled,location:e.location,backend:e.backend};if((0,r._isFirebaseServerApp)(e.app)&&e.app.settings.appCheckToken){const n=e.app.settings.appCheckToken;t.getAppCheckToken=()=>Promise.resolve({token:n})}else e.appCheck&&(e.options?.useLimitedUseAppCheckTokens?t.getAppCheckToken=()=>e.appCheck.getLimitedUseToken():t.getAppCheckToken=()=>e.appCheck.getToken());return e.auth&&(t.getAuthToken=()=>e.auth.getToken()),t}
/**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class oe{constructor(e,t){this._apiSettings=se(e),this.model=oe.normalizeModelName(t,this._apiSettings.backend.backendType)}static normalizeModelName(e,t){return t===H.GOOGLE_AI?oe.normalizeGoogleAIModelName(e):oe.normalizeVertexAIModelName(e)}static normalizeGoogleAIModelName(e){return`models/${e}`}static normalizeVertexAIModelName(e){let t;return t=e.includes('/')?e.startsWith('models/')?`publishers/google/${e}`:e:`publishers/google/models/${e}`,t}}
/**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const ie='AbortError';class ae{constructor(e){this.params=e}toString(){const e=new URL(this.baseUrl);return e.pathname=this.pathname,e.search=this.queryParams.toString(),e.toString()}get pathname(){return this.params.templateId?`${this.params.apiSettings.backend._getTemplatePath(this.params.apiSettings.project,this.params.templateId)}:${this.params.task}`:`${this.params.apiSettings.backend._getModelPath(this.params.apiSettings.project,this.params.model)}:${this.params.task}`}get baseUrl(){return this.params.singleRequestOptions?.baseUrl??`https://${f}`}get queryParams(){const e=new URLSearchParams;return this.params.stream&&e.set('alt','sse'),e}}class re{constructor(e){this.apiSettings=e}toString(){const e=new URL(`wss://${f}`);e.pathname=this.pathname;const t=new URLSearchParams;return t.set('key',this.apiSettings.apiKey),e.search=t.toString(),e.toString()}get pathname(){return this.apiSettings.backend.backendType===H.GOOGLE_AI?'ws/google.firebase.vertexai.v1beta.GenerativeService/BidiGenerateContent':`ws/google.firebase.vertexai.v1beta.LlmBidiService/BidiGenerateContent/locations/${this.apiSettings.location}`}}function ce(e){const t=[];return t.push(`gl-js/${g}`),t.push(`fire/${g}`),e.params.apiSettings.inferenceMode!==v.PREFER_ON_DEVICE&&e.params.apiSettings.inferenceMode!==v.PREFER_IN_CLOUD||t.push("hybrid"),t.join(' ')}async function le(e){const t=new Headers;if(t.append('Content-Type','application/json'),t.append('x-goog-api-client',ce(e)),t.append('x-goog-api-key',e.params.apiSettings.apiKey),e.params.apiSettings.automaticDataCollectionEnabled&&t.append('X-Firebase-Appid',e.params.apiSettings.appId),e.params.apiSettings.getAppCheckToken){const n=await e.params.apiSettings.getAppCheckToken();n&&(t.append('X-Firebase-AppCheck',n.token),n.error&&J.warn(`Unable to obtain a valid App Check token: ${n.error.message}`))}if(e.params.apiSettings.getAuthToken){const n=await e.params.apiSettings.getAuthToken();n&&t.append('Authorization',`Firebase ${n.accessToken}`)}return t}async function de(e,t){const n=new ae(e);let s;const o=e.singleRequestOptions?.signal,i=null!=e.singleRequestOptions?.timeout&&e.singleRequestOptions.timeout>=0?e.singleRequestOptions.timeout:18e4,a=new AbortController,r=setTimeout(()=>{a.abort(new DOMException("Timeout has expired.",ie)),J.debug(`Aborting request to ${n} due to timeout (${i}ms)`)},i),c=AbortSignal.any(o?[o,a.signal]:[a.signal]);if(o&&o.aborted)throw clearTimeout(r),new DOMException(o.reason??'Aborted externally before fetch',ie);try{const e={method:'POST',headers:await le(n),signal:c,body:t};if(s=await fetch(n.toString(),e),!s.ok){let e,t='';try{const n=await s.json();t=n.error.message,n.error.details&&(t+=` ${JSON.stringify(n.error.details)}`,e=n.error.details)}catch(e){}if(403===s.status&&e&&e.some(e=>'SERVICE_DISABLED'===e.reason)&&e.some(e=>e.links?.[0]?.description.includes('Google developers console API activation')))throw new O($.API_NOT_ENABLED,`The Firebase AI SDK requires the Firebase AI API ('firebasevertexai.googleapis.com') to be enabled in your Firebase project. Enable this API by visiting the Firebase Console at https://console.firebase.google.com/project/${n.params.apiSettings.project}/ailogic/ and clicking "Get started". If you enabled this API recently, wait a few minutes for the action to propagate to our systems and then retry.`,{status:s.status,statusText:s.statusText,errorDetails:e});throw new O($.FETCH_ERROR,`Error fetching from ${n}: [${s.status} ${s.statusText}] ${t}`,{status:s.status,statusText:s.statusText,errorDetails:e})}}catch(e){let t=e;throw e.code!==$.FETCH_ERROR&&e.code!==$.API_NOT_ENABLED&&e instanceof Error&&e.name!==ie&&(t=new O($.ERROR,`Error fetching from ${n.toString()}: ${e.message}`),t.stack=e.stack),t}finally{clearTimeout(r)}return s}
/**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function ue(e){if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&J.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),Oe(e.candidates[0]))throw new O($.RESPONSE_ERROR,`Response error: ${Se(e)}. Response body stored in error.response`,{response:e});return!0}return!1}function pe(e,t=M.IN_CLOUD){e.candidates&&!e.candidates[0].hasOwnProperty('index')&&(e.candidates[0].index=0);const n=he(e);return n.inferenceSource=t,n}function he(e){return e.text=()=>{if(ue(e))return fe(e,e=>!e.thought);if(e.promptFeedback)throw new O($.RESPONSE_ERROR,`Text not available. ${Se(e)}`,{response:e});return''},e.thoughtSummary=()=>{if(ue(e)){const t=fe(e,e=>!!e.thought);return''===t?void 0:t}if(e.promptFeedback)throw new O($.RESPONSE_ERROR,`Thought summary not available. ${Se(e)}`,{response:e})},e.inlineDataParts=()=>{if(ue(e))return ge(e);if(e.promptFeedback)throw new O($.RESPONSE_ERROR,`Data not available. ${Se(e)}`,{response:e})},e.functionCalls=()=>{if(ue(e))return me(e);if(e.promptFeedback)throw new O($.RESPONSE_ERROR,`Function call not available. ${Se(e)}`,{response:e})},e}function fe(e,t){const n=[];if(e.candidates?.[0].content?.parts)for(const s of e.candidates?.[0].content?.parts)s.text&&t(s)&&n.push(s.text);return n.length>0?n.join(''):''}function me(e){if(!e)return;const t=[];if(e.candidates?.[0].content?.parts)for(const n of e.candidates?.[0].content?.parts)n.functionCall&&t.push(n.functionCall);return t.length>0?t:void 0}function ge(e){const t=[];if(e.candidates?.[0].content?.parts)for(const n of e.candidates?.[0].content?.parts)n.inlineData&&t.push(n);return t.length>0?t:void 0}const Ee=[w.RECITATION,w.SAFETY,w.BLOCKLIST,w.PROHIBITED_CONTENT,w.SPII,w.MALFORMED_FUNCTION_CALL,w.IMAGE_SAFETY,w.IMAGE_PROHIBITED_CONTENT,w.IMAGE_OTHER,w.NO_IMAGE,w.IMAGE_RECITATION,w.LANGUAGE,w.UNEXPECTED_TOOL_CALL,w.TOO_MANY_TOOL_CALLS,w.MISSING_THOUGHT_SIGNATURE,w.MALFORMED_RESPONSE];function Oe(e){return!!e.finishReason&&Ee.some(t=>t===e.finishReason)}function Se(e){let t='';if(e.candidates&&0!==e.candidates.length||!e.promptFeedback){if(e.candidates?.[0]){const n=e.candidates[0];Oe(n)&&(t+=`Candidate was blocked due to ${n.finishReason}`,n.finishMessage&&(t+=`: ${n.finishMessage}`))}}else t+='Response was blocked',e.promptFeedback?.blockReason&&(t+=` due to ${e.promptFeedback.blockReason}`),e.promptFeedback?.blockReasonMessage&&(t+=`: ${e.promptFeedback.blockReasonMessage}`);return t}
/**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function Re(e){if(e.safetySettings?.forEach(e=>{if(e.method)throw new O($.UNSUPPORTED,'SafetySetting.method is not supported in the the Gemini Developer API. Please remove this property.')}),e.generationConfig?.topK){const t=Math.round(e.generationConfig.topK);t!==e.generationConfig.topK&&(J.warn('topK in GenerationConfig has been rounded to the nearest integer to match the format for requests to the Gemini Developer API.'),e.generationConfig.topK=t)}return e}function _e(e){return{candidates:e.candidates?Ae(e.candidates):void 0,prompt:e.promptFeedback?be(e.promptFeedback):void 0,usageMetadata:e.usageMetadata}}function ye(e,t){return{generateContentRequest:{model:t,...e}}}function Ae(e){const t=[];let n;return t&&e.forEach(e=>{let s;if(e.citationMetadata&&(s={citations:e.citationMetadata.citationSources}),e.safetyRatings&&(n=e.safetyRatings.map(e=>({...e,severity:e.severity??b.HARM_SEVERITY_UNSUPPORTED,probabilityScore:e.probabilityScore??0,severityScore:e.severityScore??0}))),e.content?.parts?.some(e=>e?.videoMetadata))throw new O($.UNSUPPORTED,'Part.videoMetadata is not supported in the Gemini Developer API. Please remove this property.');const o={index:e.index,content:e.content,finishReason:e.finishReason,finishMessage:e.finishMessage,safetyRatings:n,citationMetadata:s,groundingMetadata:e.groundingMetadata,urlContextMetadata:e.urlContextMetadata};t.push(o)}),t}function be(e){const t=[];e.safetyRatings.forEach(e=>{t.push({category:e.category,probability:e.probability,severity:e.severity??b.HARM_SEVERITY_UNSUPPORTED,probabilityScore:e.probabilityScore??0,severityScore:e.severityScore??0,blocked:e.blocked})});return{blockReason:e.blockReason,safetyRatings:t,blockReasonMessage:e.blockReasonMessage}}
/**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const Ie=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function we(e,t,n){const s=Pe(e.body.pipeThrough(new TextDecoderStream('utf8',{fatal:!0}))),[o,i]=s.tee(),{response:a,firstValue:r}=await Te(i,t,n);return{stream:Ne(o,t,n),response:a,firstValue:r}}async function Te(e,t,n){const[s,o]=e.tee(),i=s.getReader(),{value:a}=await i.read();return{firstValue:a,response:Ce(o,t,n)}}async function Ce(e,t,n){const s=[],o=e.getReader();for(;;){const{done:e,value:i}=await o.read();if(e){let e=Le(s);return t.backend.backendType===H.GOOGLE_AI&&(e=_e(e)),pe(e,n)}s.push(i)}}async function*Ne(e,t,n){const s=e.getReader();for(;;){const{value:e,done:o}=await s.read();if(o)break;let i;i=t.backend.backendType===H.GOOGLE_AI?pe(_e(e),n):pe(e,n);const a=i.candidates?.[0];(a?.content?.parts||a?.finishReason||a?.citationMetadata||a?.urlContextMetadata)&&(yield i)}}function Pe(e){const t=e.getReader();return new ReadableStream({start(e){let n='';return(function s(){return t.read().then(({value:t,done:o})=>{if(o)return n.trim()?void e.error(new O($.PARSE_FAILED,'Failed to parse stream')):void e.close();n+=t;let i,a=n.match(Ie);for(;a;){try{i=JSON.parse(a[1])}catch(t){return void e.error(new O($.PARSE_FAILED,`Error parsing JSON response: "${a[1]}`))}e.enqueue(i),n=n.substring(a[0].length),a=n.match(Ie)}return s()})})()}})}function Le(e){const t=e[e.length-1],n={promptFeedback:t?.promptFeedback};for(const t of e)if(t.candidates)for(const e of t.candidates){const t=e.index||0;n.candidates||(n.candidates=[]),n.candidates[t]||(n.candidates[t]={index:e.index}),n.candidates[t].citationMetadata=e.citationMetadata,n.candidates[t].finishReason=e.finishReason,n.candidates[t].finishMessage=e.finishMessage,n.candidates[t].safetyRatings=e.safetyRatings,n.candidates[t].groundingMetadata=e.groundingMetadata;const s=e.urlContextMetadata;if('object'==typeof s&&null!==s&&Object.keys(s).length>0&&(n.candidates[t].urlContextMetadata=s),e.content){if(!e.content.parts)continue;n.candidates[t].content||(n.candidates[t].content={role:e.content.role||'user',parts:[]});for(const s of e.content.parts){const e={...s};''!==s.text&&(Object.keys(e).length>0&&n.candidates[t].content.parts.push(e))}}}return n}
/**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const ve=[$.FETCH_ERROR,$.ERROR,$.API_NOT_ENABLED];async function Me(e,t,n,s){if(!t)return{response:await s(),inferenceSource:M.IN_CLOUD};switch(t.mode){case v.ONLY_ON_DEVICE:if(await t.isAvailable(e))return{response:await n(),inferenceSource:M.ON_DEVICE};throw new O($.UNSUPPORTED,'Inference mode is ONLY_ON_DEVICE, but an on-device model is not available.');case v.ONLY_IN_CLOUD:return{response:await s(),inferenceSource:M.IN_CLOUD};case v.PREFER_IN_CLOUD:try{return{response:await s(),inferenceSource:M.IN_CLOUD}}catch(s){if(s instanceof O&&ve.includes(s.code)&&await t.isAvailable(e))return{response:await n(),inferenceSource:M.ON_DEVICE};throw s}case v.PREFER_ON_DEVICE:return await t.isAvailable(e)?{response:await n(),inferenceSource:M.ON_DEVICE}:{response:await s(),inferenceSource:M.IN_CLOUD};default:throw new O($.ERROR,`Unexpected infererence mode: ${t.mode}`)}}
/**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */async function De(e,t,n,s){return e.backend.backendType===H.GOOGLE_AI&&(n=Re(n)),de({task:"streamGenerateContent",model:t,apiSettings:e,stream:!0,singleRequestOptions:s},JSON.stringify(n))}async function ke(e,t,n,s,o){const i=await Me(n,s,()=>s.generateContentStream(n),()=>De(e,t,n,o));return we(i.response,e,i.inferenceSource)}async function Ue(e,t,n,s){return e.backend.backendType===H.GOOGLE_AI&&(n=Re(n)),de({model:t,task:"generateContent",apiSettings:e,stream:!1,singleRequestOptions:s},JSON.stringify(n))}async function xe(e,t,n,s){const o=await de({task:"templateGenerateContent",templateId:t,apiSettings:e,stream:!1,singleRequestOptions:s},JSON.stringify(n));return{response:pe(await Fe(o,e))}}async function Ge(e,t,n,s){return we(await de({task:"templateStreamGenerateContent",templateId:t,apiSettings:e,stream:!0,singleRequestOptions:s},JSON.stringify(n)),e)}async function $e(e,t,n,s,o){const i=await Me(n,s,()=>s.generateContent(n),()=>Ue(e,t,n,o));return{response:pe(await Fe(i.response,e),i.inferenceSource)}}async function Fe(e,t){const n=await e.json();return t.backend.backendType===H.GOOGLE_AI?_e(n):n}
/**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function He(e){if(null!=e)return'string'==typeof e?{role:'system',parts:[{text:e}]}:e.text?{role:'system',parts:[e]}:e.parts?e.role?e:{role:'system',parts:e.parts}:void 0}function je(e){let t=[];if('string'==typeof e)t=[{text:e}];else for(const n of e)'string'==typeof n?t.push({text:n}):t.push(n);return Ve(t)}function Ve(e){const t={role:'user',parts:[]};let n=!1,s=!1;for(const o of e)'functionResponse'in o?s=!0:n=!0,t.parts.push(o);if(n&&s)throw new O($.INVALID_CONTENT,'Within a single message, FunctionResponse cannot be mixed with other type of Part in the request for sending chat message.');if(!n&&!s)throw new O($.INVALID_CONTENT,'No Content is provided for sending chat message.');return t}function Be(e){let t;if(e.contents)t=e;else{t={contents:[je(e)]}}return e.systemInstruction&&(t.systemInstruction=He(e.systemInstruction)),t}
/**
   * @license
   * Copyright 2026 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const Ye='SILENT_ERROR';class qe{constructor(e,t,n){this.params=t,this.requestOptions=n,this._history=[],this._sendPromise=Promise.resolve(),this._apiSettings=e}async getHistory(){return await this._sendPromise,this._history}async _sendMessage(e,t){let n={};await this._sendPromise;const s=[];return this._sendPromise=this._sendPromise.then(async()=>{let o,i=0;const a=this.requestOptions?.maxSequentialFunctionCalls??10;do{let a;if(o){i++;a=je(await this._callFunctionsAsNeeded(o))}else a=je(e);const r=this._formatRequest(a,[...s]);s.push(a);const c=await this._callGenerateContent(r,t);if(c)if(n=c,o=this._getCallableFunctionCalls(c.response),c.response.candidates&&c.response.candidates.length>0){const e={parts:c.response.candidates?.[0].content.parts||[],role:c.response.candidates?.[0].content.role||'model'};s.push(e)}else{const e=Se(c.response);e&&J.warn(`sendMessage() was unsuccessful. ${e}. Inspect response object for details.`)}else o=void 0}while(o&&i<a);o&&i>=a&&J.warn(`Automatic function calling exceeded the limit of ${a} function calls. Returning last model response.`)}),await this._sendPromise,this._history=this._history.concat(s),n}async _sendMessageStream(e,t){await this._sendPromise;const n=[],s=(async()=>{let s,o=0;const i=this.requestOptions?.maxSequentialFunctionCalls??10;let a;do{let i;if(s){o++;i=je(await this._callFunctionsAsNeeded(s))}else i=je(e);const r=this._formatRequest(i,[...n]);if(n.push(i),a=await this._callGenerateContentStream(r,t),s=this._getCallableFunctionCalls(a.firstValue),s&&a.firstValue&&a.firstValue.candidates&&a.firstValue.candidates.length>0){const e={...a.firstValue.candidates[0].content};e.role||(e.role='model'),n.push(e)}}while(s&&o<i);return s&&o>=i&&J.warn(`Automatic function calling exceeded the limit of ${i} function calls. Returning last model response.`),{stream:a.stream,response:a.response}})();return this._sendPromise=this._sendPromise.then(async()=>s).catch(e=>{throw new Error(Ye)}).then(e=>e.response).then(e=>{if(e.candidates&&e.candidates.length>0){this._history=this._history.concat(n);const t={...e.candidates[0].content};t.role||(t.role='model'),this._history.push(t)}else{const t=Se(e);t&&J.warn(`sendMessageStream() was unsuccessful. ${t}. Inspect response object for details.`)}}).catch(e=>{e.message!==Ye&&'AbortError'!==e.name&&J.error(e)}),s}_getCallableFunctionCalls(e){const t=this.params?.tools?.find(e=>e.functionDeclarations);if(!t?.functionDeclarations)return;const n=me(e);if(n){for(const e of n){const n=t.functionDeclarations?.some(t=>t.name===e.name&&'function'==typeof t.functionReference);if(!n)return}return n}}async _callFunctionsAsNeeded(e){const t=[],n=[],s=this.params?.tools?.find(e=>e.functionDeclarations);if(s&&s.functionDeclarations){for(const o of e){const e=s.functionDeclarations.find(e=>e.name===o.name);if(e?.functionReference){const s=Promise.resolve(e.functionReference(o.args)).catch(t=>{const n=new O($.ERROR,`Error in user-defined function "${e.name}": ${t.message}`);throw n.stack=t.stack,n});t.push({name:o.name,id:o.id,results:s}),n.push(s)}}await Promise.all(n);const o=[];for(const{name:e,id:n,results:s}of t){const t={name:e,response:await s};n&&(t.id=n),o.push({functionResponse:t})}return o}throw new O($.REQUEST_ERROR,"No function declarations were provided in \"tools\".")}}
/**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const We=['text','inlineData','functionCall','functionResponse','thought','thoughtSignature'],Je={user:['text','inlineData','functionResponse'],function:['functionResponse'],model:['text','functionCall','thought','thoughtSignature'],system:['text']},Ke={user:['model'],function:['model'],model:['user','function'],system:[]};function Qe(e){let t=null;for(const n of e){const{role:e,parts:s}=n;if(!t&&'user'!==e)throw new O($.INVALID_CONTENT,`First Content should be with role 'user', got ${e}`);if(!S.includes(e))throw new O($.INVALID_CONTENT,`Each item should include role field. Got ${e} but valid roles are: ${JSON.stringify(S)}`);if(!Array.isArray(s))throw new O($.INVALID_CONTENT,"Content should have 'parts' property with an array of Parts");if(0===s.length)throw new O($.INVALID_CONTENT,"Each Content should have at least one part");const o={text:0,inlineData:0,functionCall:0,functionResponse:0,thought:0,thoughtSignature:0,executableCode:0,codeExecutionResult:0};for(const e of s)for(const t of We)t in e&&(o[t]+=1);const i=Je[e];for(const t of We)if(!i.includes(t)&&o[t]>0)throw new O($.INVALID_CONTENT,`Content with role '${e}' can't contain '${t}' part`);if(t){if(!Ke[e].includes(t.role))throw new O($.INVALID_CONTENT,`Content with role '${e}' can't follow '${t.role}'. Valid previous roles: ${JSON.stringify(Ke)}`)}t=n}}
/**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Xe extends qe{constructor(e,t,n,s,o){super(e,s,o),this.model=t,this.chromeAdapter=n,this.params=s,this.requestOptions=o,s?.history&&(Qe(s.history),this._history=s.history),null!=this.params?.systemInstruction&&(this.params={...this.params,systemInstruction:He(this.params.systemInstruction)})}_formatRequest(e,t){return{safetySettings:this.params?.safetySettings,generationConfig:this.params?.generationConfig,tools:this.params?.tools,toolConfig:this.params?.toolConfig,systemInstruction:this.params?.systemInstruction,contents:[...this._history,...t,e]}}_callGenerateContent(e,t){return $e(this._apiSettings,this.model,e,this.chromeAdapter,{...this.requestOptions,...t})}_callGenerateContentStream(e,t){return ke(this._apiSettings,this.model,e,this.chromeAdapter,{...this.requestOptions,...t})}async sendMessage(e,t){return this._sendMessage(e,t)}async sendMessageStream(e,t){return this._sendMessageStream(e,t)}}
/**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */async function ze(e,t,n,s){let o='';if(e.backend.backendType===H.GOOGLE_AI){const e=ye(n,t);o=JSON.stringify(e)}else o=JSON.stringify(n);return(await de({model:t,task:"countTokens",apiSettings:e,stream:!1,singleRequestOptions:s},o)).json()}async function Ze(e,t,n,s,o){if(s?.mode===v.ONLY_ON_DEVICE)throw new O($.UNSUPPORTED,'countTokens() is not supported for on-device models.');return ze(e,t,n,o)}
/**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class et extends oe{constructor(e,t,n,s){super(e,t.model),this.chromeAdapter=s,this.generationConfig=t.generationConfig||{},tt(this.generationConfig),this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=He(t.systemInstruction),this.requestOptions=n||{}}async initializeDeviceModel(e){if(!this.chromeAdapter||this.chromeAdapter.mode===v.ONLY_IN_CLOUD)return;if(await this.chromeAdapter.downloadIfAvailable(e)===K.UNAVAILABLE){const e=new O($.API_NOT_ENABLED,'Local LanguageModel API not available in this environment.');if(this.chromeAdapter.mode===v.ONLY_ON_DEVICE)throw e;J.debug(e.message)}await this.chromeAdapter.downloadPromise}async generateContent(e,t){const n=Be(e);return $e(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...n},this.chromeAdapter,{...this.requestOptions,...t})}async generateContentStream(e,t){const n=Be(e),{stream:s,response:o}=await ke(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...n},this.chromeAdapter,{...this.requestOptions,...t});return{stream:s,response:o}}startChat(e){return new Xe(this._apiSettings,this.model,this.chromeAdapter,{tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,generationConfig:this.generationConfig,safetySettings:this.safetySettings,...e},this.requestOptions)}async countTokens(e,t){const n=Be(e);return Ze(this._apiSettings,this.model,n,this.chromeAdapter,{...this.requestOptions,...t})}}function tt(e){if(null!=e.thinkingConfig?.thinkingBudget&&e.thinkingConfig?.thinkingLevel)throw new O($.UNSUPPORTED,"Cannot set both thinkingBudget and thinkingLevel in a config.");if(null!=e.responseSchema&&null!=e.responseJsonSchema)throw new O($.UNSUPPORTED,"Cannot set both responseSchema and responseJsonSchema in a config.");if((null!=e.responseSchema||null!=e.responseJsonSchema)&&'application/json'!==e.responseMimeType&&'text/x.enum'!==e.responseMimeType)throw new O($.UNSUPPORTED,"responseMimeType must be set to \"application/json\" or \"text/x.enum\" if responseSchema or responseJsonSchema are set.")}
/**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class nt{constructor(){if('undefined'==typeof WebSocket)throw new O($.UNSUPPORTED,"The WebSocket API is not available in this environment. The \"Live\" feature is not supported here. It is supported in modern browser windows, Web Workers with WebSocket support, and Node >= 22.")}connect(e){return new Promise((t,n)=>{this.ws=new WebSocket(e),this.ws.binaryType='blob',this.ws.addEventListener('open',()=>t(),{once:!0}),this.ws.addEventListener('error',()=>n(new O($.FETCH_ERROR,"Error event raised on WebSocket")),{once:!0}),this.ws.addEventListener('close',e=>{e.reason&&J.warn(`WebSocket connection closed by server. Reason: '${e.reason}'`)})})}send(e){if(!this.ws||this.ws.readyState!==WebSocket.OPEN)throw new O($.REQUEST_ERROR,'WebSocket is not open.');this.ws.send(e)}async*listen(){if(!this.ws)throw new O($.REQUEST_ERROR,'WebSocket is not connected.');const e=[],t=[];let n=null,s=!1;const o=async s=>{let o;if(s.data instanceof Blob)o=await s.data.text();else{if('string'!=typeof s.data)return t.push(new O($.PARSE_FAILED,`Failed to parse WebSocket response. Expected data to be a Blob or string, but was ${typeof s.data}.`)),void(n&&(n(),n=null));o=s.data}try{const t=JSON.parse(o);e.push(t)}catch(e){const n=e;t.push(new O($.PARSE_FAILED,`Error parsing WebSocket message to JSON: ${n.message}`))}n&&(n(),n=null)},i=()=>{t.push(new O($.FETCH_ERROR,'WebSocket connection error.')),n&&(n(),n=null)},a=e=>{e.reason&&J.warn(`WebSocket connection closed by the server with reason: ${e.reason}`),s=!0,n&&(n(),n=null),this.ws?.removeEventListener('message',o),this.ws?.removeEventListener('close',a),this.ws?.removeEventListener('error',i)};for(this.ws.addEventListener('message',o),this.ws.addEventListener('close',a),this.ws.addEventListener('error',i);!s;){if(t.length>0){throw t.shift()}e.length>0?yield e.shift():await new Promise(e=>{n=e})}if(t.length>0){throw t.shift()}}close(e,t){return new Promise(n=>this.ws?(this.ws.addEventListener('close',()=>n(),{once:!0}),this.ws.readyState===WebSocket.CLOSED||this.ws.readyState===WebSocket.CONNECTING?n():void(this.ws.readyState!==WebSocket.CLOSING&&this.ws.close(e,t))):n())}}
/**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class st{constructor(e,t,n,s){this._setupMessage=e,this._apiSettings=t,this._sessionResumption=n,this.isClosed=!1,this.inConversation=!1,this._serverMessages=null,this._webSocketHandler=s||new nt,this.connectionPromise=this._connectSession(this._sessionResumption)}async _connectSession(e){const t=new re(this._apiSettings);await this._webSocketHandler.connect(t.toString());try{this._serverMessages=this._webSocketHandler.listen();const t={...this._setupMessage};e&&(t.setup.sessionResumption=e),this._webSocketHandler.send(JSON.stringify(t));const n=(await this._serverMessages.next()).value;if(!n||'object'!=typeof n||!('setupComplete'in n))throw await this._webSocketHandler.close(1011,'Handshake failure'),new O($.RESPONSE_ERROR,'Server connection handshake failed. The server did not respond with a setupComplete message.');this.isClosed=!1}catch(e){throw await this._webSocketHandler.close(),e}}async resumeSession(e){if(!this._sessionResumption)throw new O($.UNSUPPORTED,'Cannot resume session: no sessionResumption config provided');await this.close(),await this._connectSession(e)}async send(e,t=!0){if(this.isClosed)throw new O($.REQUEST_ERROR,'This LiveSession has been closed and cannot be used.');const n={clientContent:{turns:[je(e)],turnComplete:t}};this._webSocketHandler.send(JSON.stringify(n))}async sendTextRealtime(e){if(this.isClosed)throw new O($.REQUEST_ERROR,'This LiveSession has been closed and cannot be used.');const t={realtimeInput:{text:e}};this._webSocketHandler.send(JSON.stringify(t))}async sendAudioRealtime(e){if(this.isClosed)throw new O($.REQUEST_ERROR,'This LiveSession has been closed and cannot be used.');const t={realtimeInput:{audio:e}};this._webSocketHandler.send(JSON.stringify(t))}async sendVideoRealtime(e){if(this.isClosed)throw new O($.REQUEST_ERROR,'This LiveSession has been closed and cannot be used.');const t={realtimeInput:{video:e}};this._webSocketHandler.send(JSON.stringify(t))}async sendFunctionResponses(e){if(this.isClosed)throw new O($.REQUEST_ERROR,'This LiveSession has been closed and cannot be used.');const t={toolResponse:{functionResponses:e}};this._webSocketHandler.send(JSON.stringify(t))}async*receive(){if(this.isClosed)throw new O($.SESSION_CLOSED,'Cannot read from a Live session that is closed. Try starting a new Live session.');if(this._serverMessages)for await(const e of this._serverMessages)if(e&&'object'==typeof e)if(G.SERVER_CONTENT in e)yield{type:'serverContent',...e.serverContent};else if(G.TOOL_CALL in e)yield{type:'toolCall',...e.toolCall};else if(G.TOOL_CALL_CANCELLATION in e)yield{type:'toolCallCancellation',...e.toolCallCancellation};else if('goAway'in e){const t=e.goAway;yield{type:G.GOING_AWAY_NOTICE,timeLeft:ot(t.timeLeft)}}else G.SESSION_RESUMPTION_UPDATE in e?yield{type:G.SESSION_RESUMPTION_UPDATE,...e.sessionResumptionUpdate}:J.warn(`Received an unknown message type from the server: ${JSON.stringify(e)}`);else J.warn(`Received an invalid message from the server: ${JSON.stringify(e)}`)}async close(){this.isClosed||(this.isClosed=!0,await this._webSocketHandler.close(1e3,'Client closed session.'))}async sendMediaChunks(e){if(this.isClosed)throw new O($.REQUEST_ERROR,'This LiveSession has been closed and cannot be used.');e.forEach(e=>{const t={realtimeInput:{mediaChunks:[e]}};this._webSocketHandler.send(JSON.stringify(t))})}async sendMediaStream(e){if(this.isClosed)throw new O($.REQUEST_ERROR,'This LiveSession has been closed and cannot be used.');const t=e.getReader();for(;;)try{const{done:e,value:n}=await t.read();if(e)break;if(!n)throw new Error('Missing chunk in reader, but reader is not done.');await this.sendMediaChunks([n])}catch(e){const t=e instanceof Error?e.message:'Error processing media stream.';throw new O($.REQUEST_ERROR,t)}}}function ot(e){return e&&e.endsWith('s')?Number(e.slice(0,-1)):0}
/**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class it extends oe{constructor(e,t,n){super(e,t.model),this._webSocketHandler=n,this.generationConfig=t.generationConfig||{},this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=He(t.systemInstruction)}async connect(e){let t;t=this._apiSettings.backend.backendType===H.GOOGLE_AI?`projects/${this._apiSettings.project}/${this.model}`:`projects/${this._apiSettings.project}/locations/${this._apiSettings.location}/${this.model}`;const{inputAudioTranscription:n,outputAudioTranscription:s,...o}=this.generationConfig,i=o.contextWindowCompression;delete o.contextWindowCompression;const a={setup:{model:t,generationConfig:o,contextWindowCompression:i,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,inputAudioTranscription:n,outputAudioTranscription:s,sessionResumption:e}},r=new st(a,this._apiSettings,e,this._webSocketHandler);return await r.connectionPromise,r}}
/**
   * @license
   * Copyright 2026 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class at extends qe{constructor(e,t,n){super(e,t,n),this.params=t,this.requestOptions=n,t.history&&(Qe(t.history),this._history=t.history)}_formatRequest(e,t){const n={history:[...this._history,...t,e]};return this.params.templateVariables&&(n.inputs=this.params.templateVariables),this.params.tools&&(n.tools=this.params.tools?.map(e=>e.functionDeclarations?{templateFunctions:e.functionDeclarations.map(e=>{if(e.parameters){const t={...e};return delete t.parameters,t.inputSchema=e.parameters,t}return e})}:e)),this.params.toolConfig&&(n.toolConfig=this.params.toolConfig),n}_callGenerateContent(e,t){return xe(this._apiSettings,this.params.templateId,e,{...this.requestOptions,...t})}_callGenerateContentStream(e,t){return Ge(this._apiSettings,this.params.templateId,e,{...this.requestOptions,...t})}async sendMessage(e,t){return this._sendMessage(e,t)}async sendMessageStream(e,t){return this._sendMessageStream(e,t)}}
/**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class rt{constructor(e,t){this.requestOptions=t||{},this._apiSettings=se(e)}async generateContent(e,t,n,s){return xe(this._apiSettings,e,{inputs:t,...s&&{toolConfig:s}},{...this.requestOptions,...n})}async generateContentStream(e,t,n,s){return Ge(this._apiSettings,e,{inputs:t,...s&&{toolConfig:s}},{...this.requestOptions,...n})}startChat(e){return new at(this._apiSettings,e,this.requestOptions)}}
/**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class ct{constructor(e){if(!e.type&&!e.anyOf)throw new O($.INVALID_SCHEMA,"A schema must have either a 'type' or an 'anyOf' array of sub-schemas.");for(const t in e)this[t]=e[t];this.type=e.type,this.format=e.hasOwnProperty('format')?e.format:void 0,this.nullable=!!e.hasOwnProperty('nullable')&&!!e.nullable}toJSON(){const e={type:this.type};for(const t in this)this.hasOwnProperty(t)&&void 0!==this[t]&&('required'===t&&this.type!==F.OBJECT||(e[t]=this[t]));return e}static array(e){return new ht(e,e.items)}static object(e){return new ft(e,e.properties,e.optionalProperties)}static string(e){return new pt(e)}static enumString(e){return new pt(e,e.enum)}static integer(e){return new lt(e)}static number(e){return new dt(e)}static boolean(e){return new ut(e)}static anyOf(e){return new mt(e)}}class lt extends ct{constructor(e){super({type:F.INTEGER,...e})}}class dt extends ct{constructor(e){super({type:F.NUMBER,...e})}}class ut extends ct{constructor(e){super({type:F.BOOLEAN,...e})}}class pt extends ct{constructor(e,t){super({type:F.STRING,...e}),this.enum=t}toJSON(){const e=super.toJSON();return this.enum&&(e.enum=this.enum),e}}class ht extends ct{constructor(e,t){super({type:F.ARRAY,...e}),this.items=t}toJSON(){const e=super.toJSON();return e.items=this.items.toJSON(),e}}class ft extends ct{constructor(e,t,n=[]){super({type:F.OBJECT,...e}),this.properties=t,this.optionalProperties=n}toJSON(){const e=super.toJSON();e.properties={...this.properties};const t=[];if(this.optionalProperties)for(const e of this.optionalProperties)if(!this.properties.hasOwnProperty(e))throw new O($.INVALID_SCHEMA,`Property "${e}" specified in "optionalProperties" does not exist.`);for(const n in this.properties)this.properties.hasOwnProperty(n)&&(e.properties[n]=this.properties[n].toJSON(),this.optionalProperties.includes(n)||t.push(n));return t.length>0&&(e.required=t),delete e.optionalProperties,e}}class mt extends ct{constructor(e){if(0===e.anyOf.length)throw new O($.INVALID_SCHEMA,"The 'anyOf' array must not be empty.");super({...e,type:void 0}),this.anyOf=e.anyOf}toJSON(){const e=super.toJSON();return this.anyOf&&Array.isArray(this.anyOf)&&(e.anyOf=this.anyOf.map(e=>e.toJSON())),e}}
/**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const gt=16e3,Et='audio-processor',Ot=`\n  class AudioProcessor extends AudioWorkletProcessor {\n    constructor(options) {\n      super();\n      this.targetSampleRate = options.processorOptions.targetSampleRate;\n      // 'sampleRate' is a global variable available inside the AudioWorkletGlobalScope,\n      // representing the native sample rate of the AudioContext.\n      this.inputSampleRate = sampleRate;\n    }\n\n    /**\n     * This method is called by the browser's audio engine for each block of audio data.\n     * Input is a single input, with a single channel (input[0][0]).\n     */\n    process(inputs) {\n      const input = inputs[0];\n      if (input && input.length > 0 && input[0].length > 0) {\n        const pcmData = input[0]; // Float32Array of raw audio samples.\n        \n        // Simple linear interpolation for resampling.\n        const resampled = new Float32Array(Math.round(pcmData.length * this.targetSampleRate / this.inputSampleRate));\n        const ratio = pcmData.length / resampled.length;\n        for (let i = 0; i < resampled.length; i++) {\n          resampled[i] = pcmData[Math.floor(i * ratio)];\n        }\n\n        // Convert Float32 (-1, 1) samples to Int16 (-32768, 32767)\n        const resampledInt16 = new Int16Array(resampled.length);\n        for (let i = 0; i < resampled.length; i++) {\n          const sample = Math.max(-1, Math.min(1, resampled[i]));\n          if (sample < 0) {\n            resampledInt16[i] = sample * 32768;\n          } else {\n            resampledInt16[i] = sample * 32767;\n          }\n        }\n        \n        this.port.postMessage(resampledInt16);\n      }\n      // Return true to keep the processor alive and processing the next audio block.\n      return true;\n    }\n  }\n\n  // Register the processor with a name that can be used to instantiate it from the main thread.\n  registerProcessor('${Et}', AudioProcessor);\n`;class St{constructor(e,t,n){this.liveSession=e,this.options=t,this.deps=n,this.isStopped=!1,this.stopDeferred=new l.Deferred,this.playbackQueue=[],this.scheduledSources=[],this.nextStartTime=0,this.isPlaybackLoopRunning=!1,this.liveSession.inConversation=!0,this.receiveLoopPromise=this.runReceiveLoop().finally(()=>this.cleanup()),this.deps.workletNode.port.onmessage=e=>{if(this.isStopped)return;const t=e.data,n={mimeType:'audio/pcm',data:btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(t.buffer))))};this.liveSession.sendAudioRealtime(n)}}async stop(){this.isStopped||(this.isStopped=!0,this.stopDeferred.resolve(),await this.receiveLoopPromise)}cleanup(){this.interruptPlayback(),this.deps.workletNode.port.onmessage=null,this.deps.workletNode.disconnect(),this.deps.sourceNode.disconnect(),this.deps.mediaStream.getTracks().forEach(e=>e.stop()),'closed'!==this.deps.audioContext.state&&this.deps.audioContext.close(),this.liveSession.inConversation=!1}enqueueAndPlay(e){this.playbackQueue.push(e),this.processPlaybackQueue()}interruptPlayback(){[...this.scheduledSources].forEach(e=>e.stop(0)),this.playbackQueue.length=0,this.nextStartTime=this.deps.audioContext.currentTime}async processPlaybackQueue(){if(!this.isPlaybackLoopRunning){for(this.isPlaybackLoopRunning=!0;this.playbackQueue.length>0&&!this.isStopped;){const e=this.playbackQueue.shift();try{const t=new Int16Array(e),n=t.length,s=this.deps.audioContext.createBuffer(1,n,24e3),o=s.getChannelData(0);for(let e=0;e<n;e++)o[e]=t[e]/32768;const i=this.deps.audioContext.createBufferSource();i.buffer=s,i.connect(this.deps.audioContext.destination),this.scheduledSources.push(i),i.onended=()=>{this.scheduledSources=this.scheduledSources.filter(e=>e!==i)},this.nextStartTime=Math.max(this.deps.audioContext.currentTime,this.nextStartTime),i.start(this.nextStartTime),this.nextStartTime+=s.duration}catch(e){J.error('Error playing audio:',e)}}this.isPlaybackLoopRunning=!1}}async runReceiveLoop(){const e=this.liveSession.receive();for(;!this.isStopped;){const t=await Promise.race([e.next(),this.stopDeferred.promise]);if(this.isStopped||!t||t.done)break;const n=t.value;if('serverContent'===n.type){const e=n;e.interrupted&&this.interruptPlayback();const t=e.modelTurn?.parts.find(e=>e.inlineData?.mimeType.startsWith('audio/'));if(t?.inlineData){const e=Uint8Array.from(atob(t.inlineData.data),e=>e.charCodeAt(0)).buffer;this.enqueueAndPlay(e)}}else if('toolCall'===n.type)if(this.options.functionCallingHandler)try{const e=await this.options.functionCallingHandler(n.functionCalls);this.isStopped||this.liveSession.sendFunctionResponses([e])}catch(e){throw new O($.ERROR,`Function calling handler failed: ${e.message}`)}else J.warn('Received tool call message, but StartAudioConversationOptions.functionCallingHandler is undefined. Ignoring tool call.')}}}async function Rt(e,t={}){if(e.isClosed)throw new O($.SESSION_CLOSED,'Cannot start audio conversation on a closed LiveSession.');if(e.inConversation)throw new O($.REQUEST_ERROR,'An audio conversation is already in progress for this session.');if('undefined'==typeof AudioWorkletNode||'undefined'==typeof AudioContext||'undefined'==typeof navigator||!navigator.mediaDevices)throw new O($.UNSUPPORTED,'Audio conversation is not supported in this environment. It requires the Web Audio API and AudioWorklet support.');let n;try{n=new AudioContext,'suspended'===n.state&&await n.resume();const s=await navigator.mediaDevices.getUserMedia({audio:!0}),o=new Blob([Ot],{type:'application/javascript'}),i=URL.createObjectURL(o);await n.audioWorklet.addModule(i);const a=n.createMediaStreamSource(s),r=new AudioWorkletNode(n,Et,{processorOptions:{targetSampleRate:gt}});a.connect(r);const c=new St(e,t,{audioContext:n,mediaStream:s,sourceNode:a,workletNode:r});return{stop:()=>c.stop()}}catch(e){if(n&&'closed'!==n.state&&n.close(),e instanceof O||e instanceof DOMException)throw e;throw new O($.ERROR,`Failed to initialize audio recording: ${e.message}`)}}
/**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function _t(e=(0,r.getApp)(),t){e=(0,l.getModularInstance)(e);const n=(0,r._getProvider)(e,h),s=t?.backend??new V,o={useLimitedUseAppCheckTokens:t?.useLimitedUseAppCheckTokens??!1},i=q(s),a=n.getImmediate({identifier:i});return a.options=o,a}const yt=['mode','onDeviceParams','inCloudParams'];function At(e,t,n){const s=t;let o;if(s.mode){for(const e of Object.keys(t))yt.includes(e)||J.warn(`When a hybrid inference mode is specified (mode is currently set to ${s.mode}), "${e}" cannot be configured at the top level. Configuration for in-cloud and on-device must be done separately in inCloudParams and onDeviceParams. Configuration values set outside of inCloudParams and onDeviceParams will be ignored.`);o=s.inCloudParams||{model:E}}else o=t;if(!o.model)throw new O($.NO_MODEL,"Must provide a model name. Example: getGenerativeModel({ model: 'my-model-name' })");const i=e.chromeAdapterFactory?.(s.mode,'undefined'==typeof window?void 0:window,s.onDeviceParams),a=new et(e,o,n,i);return a._apiSettings.inferenceMode=s.mode,a}function bt(e,t){if(!t.model)throw new O($.NO_MODEL,"Must provide a model name for getLiveGenerativeModel. Example: getLiveGenerativeModel(ai, { model: 'my-model-name' })");return new it(e,t)}function It(e,t){return new rt(e,t)}
/**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */(0,r._registerComponent)(new c.Component(h,ne,"PUBLIC").setMultipleInstances(!0)),(0,r.registerVersion)(u,p),(0,r.registerVersion)(u,p,'esm2020')},2988,[2987,2989,2990,2991]);