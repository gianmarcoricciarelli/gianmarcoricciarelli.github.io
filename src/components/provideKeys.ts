import { InjectionKey, Ref } from 'vue';
import { Mode, Sections } from '../types';

export const modeKey: InjectionKey<Ref<Mode>> = Symbol('modeKey');
export const selectedSectionKey: InjectionKey<Ref<Sections>> = Symbol('home');
