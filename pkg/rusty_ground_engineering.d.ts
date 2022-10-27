/* tslint:disable */
/* eslint-disable */
/**
* @param {Loads} loads
* @returns {number}
*/
export function ecc_b(loads: Loads): number;
/**
* @param {Loads} loads
* @returns {number}
*/
export function ecc_l(loads: Loads): number;
/**
* @param {Foundation} foundation
* @param {Loads} loads
* @returns {number}
*/
export function eff_b(foundation: Foundation, loads: Loads): number;
/**
* @param {Foundation} foundation
* @param {Loads} loads
* @returns {number}
*/
export function eff_l(foundation: Foundation, loads: Loads): number;
/**
* @param {Foundation} foundation
* @param {Loads} loads
* @returns {number}
*/
export function eff_a(foundation: Foundation, loads: Loads): number;
/**
* @param {number} phi
* @returns {number}
*/
export function n_q(phi: number): number;
/**
* @param {number} phi
* @returns {number}
*/
export function n_c(phi: number): number;
/**
* @param {number} phi
* @returns {number}
*/
export function n_g(phi: number): number;
/**
* @param {Foundation} foundation
* @param {Soil} soil
* @returns {number}
*/
export function b_q(foundation: Foundation, soil: Soil): number;
/**
* @param {Foundation} foundation
* @param {Soil} soil
* @returns {number}
*/
export function b_g(foundation: Foundation, soil: Soil): number;
/**
* @param {Foundation} foundation
* @param {Soil} soil
* @returns {number}
*/
export function b_c(foundation: Foundation, soil: Soil): number;
/**
* @param {Foundation} foundation
* @returns {number}
*/
export function b_c_undrained(foundation: Foundation): number;
/**
* @param {Foundation} foundation
* @param {Soil} soil
* @returns {number}
*/
export function s_q(foundation: Foundation, soil: Soil): number;
/**
* @param {Foundation} foundation
* @returns {number}
*/
export function s_g(foundation: Foundation): number;
/**
* @param {Foundation} foundation
* @param {Soil} soil
* @returns {number}
*/
export function s_c(foundation: Foundation, soil: Soil): number;
/**
* @param {Foundation} foundation
* @returns {number}
*/
export function s_c_undrained(foundation: Foundation): number;
/**
* @param {number} f_x
* @param {number} f_y
* @returns {number}
*/
export function resultant_action(f_x: number, f_y: number): number;
/**
* @param {number} f_x
* @param {number} f_y
* @returns {number}
*/
export function resultant_action_angle(f_x: number, f_y: number): number;
/**
* @param {Foundation} foundation
* @returns {number}
*/
export function m_b(foundation: Foundation): number;
/**
* @param {Foundation} foundation
* @returns {number}
*/
export function m_l(foundation: Foundation): number;
/**
* @param {Loads} loads
* @param {Foundation} foundation
* @returns {number}
*/
export function m(loads: Loads, foundation: Foundation): number;
/**
* @param {Loads} loads
* @param {Foundation} foundation
* @param {Soil} soil
* @returns {number}
*/
export function i_q(loads: Loads, foundation: Foundation, soil: Soil): number;
/**
* @param {Loads} loads
* @param {Foundation} foundation
* @param {Soil} soil
* @returns {number}
*/
export function i_g(loads: Loads, foundation: Foundation, soil: Soil): number;
/**
* @param {Loads} loads
* @param {Foundation} foundation
* @param {Soil} soil
* @returns {number}
*/
export function i_c(loads: Loads, foundation: Foundation, soil: Soil): number;
/**
* @param {Loads} loads
* @param {Foundation} foundation
* @param {Soil} soil
* @returns {number}
*/
export function i_c_undrained(loads: Loads, foundation: Foundation, soil: Soil): number;
/**
* @param {Loads} loads
* @param {Foundation} foundation
* @param {Soil} soil
* @param {GroundModel} ground_model
* @returns {number}
*/
export function drained_bearing_capacity(loads: Loads, foundation: Foundation, soil: Soil, ground_model: GroundModel): number;
/**
* @param {Loads} loads
* @param {Foundation} foundation
* @param {Soil} soil
* @param {GroundModel} ground_model
* @returns {number}
*/
export function undrained_bearing_capacity(loads: Loads, foundation: Foundation, soil: Soil, ground_model: GroundModel): number;
/**
* @param {Loads} loads
* @param {Foundation} foundation
* @param {Soil} soil
* @param {GroundModel} ground_model
* @returns {number}
*/
export function bearing_capacity_check(loads: Loads, foundation: Foundation, soil: Soil, ground_model: GroundModel): number;
/**
* @param {Loads} loads
* @param {Foundation} foundation
* @param {Soil} soil
* @param {GroundModel} ground_model
* @returns {number}
*/
export function undrained_bearing_capacity_check(loads: Loads, foundation: Foundation, soil: Soil, ground_model: GroundModel): number;
/**
* @param {number} pi
* @returns {number}
*/
export function stroud_f1(pi: number): number;
/**
* @param {number} pi
* @returns {number}
*/
export function stroud_f2(pi: number): number;
/**
* @param {number} pi
* @param {number} n
* @returns {number}
*/
export function spt_to_cu(pi: number, n: number): number;
/**
* @param {number} pi
* @param {number} n
* @returns {number}
*/
export function spt_to_mv(pi: number, n: number): number;
/**
* @param {number} cu
* @returns {number}
*/
export function cu_val_to_desc(cu: number): number;
/**
* @param {number} mv
* @returns {number}
*/
export function mv_val_to_desc(mv: number): number;
/**
* @param {number} mv
* @param {number} nu
* @returns {number}
*/
export function mv_to_e_dash(mv: number, nu: number): number;
/**
* @param {number} pi
* @param {number} ll
* @returns {number}
*/
export function a_line_check(pi: number, ll: number): number;
/**
* @param {number} pi
* @returns {number}
*/
export function plasticity_check(pi: number): number;
/**
* @param {HoekBrownModel} hbm
* @returns {number}
*/
export function rock_e_val(hbm: HoekBrownModel): number;
/**
* @param {number} sig3max
* @param {HoekBrownModel} hbm
* @returns {number}
*/
export function mc_phi_conv(sig3max: number, hbm: HoekBrownModel): number;
/**
* @param {number} sig3max
* @param {HoekBrownModel} hbm
* @returns {number}
*/
export function mcc_dash_conv(sig3max: number, hbm: HoekBrownModel): number;
/**
*
*
* @param {number} d60
* @param {number} d10
* @returns {number}
*/
export function coefficient_uniformity(d60: number, d10: number): number;
/**
* @param {number} is50
* @param {number} disc
* @returns {boolean}
*/
export function easy_digging(is50: number, disc: number): boolean;
/**
* @param {number} is50
* @param {number} disc
* @returns {boolean}
*/
export function hard_digging(is50: number, disc: number): boolean;
/**
* @param {number} is50
* @param {number} disc
* @returns {boolean}
*/
export function easy_ripping(is50: number, disc: number): boolean;
/**
* @param {number} is50
* @param {number} disc
* @returns {boolean}
*/
export function hard_ripping(is50: number, disc: number): boolean;
/**
* @param {number} is50
* @param {number} disc
* @returns {boolean}
*/
export function very_hard_ripping(is50: number, disc: number): boolean;
/**
* @param {number} is50
* @param {number} disc
* @returns {boolean}
*/
export function extreme_ripping(is50: number, disc: number): boolean;
/**
* Calculates the excavability of a rock mass
*
* The function take Point Load Index (is50), MPa and Discontinnuity Spacing Index (Ir), m, and returns a enum containing the type of excavation required for that rock mass
* @param {number} is50
* @param {number} disc
* @returns {number}
*/
export function excavability_assessment(is50: number, disc: number): number;
/**
* @param {number} PI
* @returns {number}
*/
export function peak_phi_from_pi_lb_nc_clay(PI: number): number;
/**
* @param {number} PI
* @returns {number}
*/
export function peak_phi_from_pi_bestest_nc_clay(PI: number): number;
/**
* @param {number} PI
* @returns {number}
*/
export function peak_phi_from_pi_lb_oc_clay(PI: number): number;
/**
* @param {number} PI
* @returns {number}
*/
export function peak_phi_from_pi_bestest_oc_clay(PI: number): number;
/**
* @param {number} particle_size
* @returns {ParticleSizeDescription}
*/
export function soil_particle_size_description(particle_size: number): ParticleSizeDescription;
/**
* @param {GradingTest} test_results
* @returns {GradingTestSummary}
*/
export function grading_test_result(test_results: GradingTest): GradingTestSummary;
/**
* @param {LWall} dims
* @param {Backfill} fill
* @param {number} slope_angle
* @returns {number}
*/
export function active_earth_pressure_on_wall_self_weight(dims: LWall, fill: Backfill, slope_angle: number): number;
/**
* @param {LWall} dims
* @param {Backfill} fill
* @param {number} slope_angle
* @param {number} surcharge
* @returns {number}
*/
export function active_earth_pressure_on_wall_surcharge(dims: LWall, fill: Backfill, slope_angle: number, surcharge: number): number;
/**
* @param {LWall} dims
* @param {Backfill} fill
* @param {number} slope_angle
* @param {number} surcharge
* @returns {number}
*/
export function driving_force(dims: LWall, fill: Backfill, slope_angle: number, surcharge: number): number;
/**
* @param {LWall} dims
* @param {Backfill} fill
* @param {number} slope_angle
* @param {number} surcharge
* @returns {number}
*/
export function driving_moment(dims: LWall, fill: Backfill, slope_angle: number, surcharge: number): number;
/**
* @param {LWall} dims
* @param {Backfill} fill
* @returns {number}
*/
export function resisting_force(dims: LWall, fill: Backfill): number;
/**
* @param {LWall} dims
* @param {Backfill} fill
* @returns {number}
*/
export function resisting_moment(dims: LWall, fill: Backfill): number;
/**
* @param {LWall} dims
* @param {Backfill} fill
* @param {number} slope_angle
* @param {number} surcharge
* @returns {number}
*/
export function overturning_utilisation(dims: LWall, fill: Backfill, slope_angle: number, surcharge: number): number;
/**
* @param {number} angle
* @returns {number}
*/
export function deg_to_rad(angle: number): number;
/**
* @param {number} phi
* @returns {number}
*/
export function k0(phi: number): number;
/**
* @param {number} phi
* @returns {number}
*/
export function rankine_ka(phi: number): number;
/**
* @param {number} phi
* @returns {number}
*/
export function rankine_kp(phi: number): number;
/**
* @param {number} phi
* @param {number} alpha
* @param {number} delta
* @param {number} sigma
* @returns {number}
*/
export function coulomb_ka(phi: number, alpha: number, delta: number, sigma: number): number;
/**
* @param {number} phi
* @param {number} alpha
* @param {number} delta
* @param {number} sigma
* @returns {number}
*/
export function coulomb_kp(phi: number, alpha: number, delta: number, sigma: number): number;
/**
* @param {number} phi
* @param {number} comb
* @returns {number}
*/
export function ec7_phi_factor(phi: number, comb: number): number;
/**
* @param {string} name
*/
export function greet(name: string): void;
/**
*/
export enum LoadStruct {
  Favorable,
  Unfavorable,
}
/**
*/
export enum LoadState {
  Perm,
  Var,
}
/**
*/
export enum Ec7Comb {
  DA1c1,
  DA1c2,
  EQU,
}
/**
*/
export enum SoilStrengths {
  VerySoft,
  Soft,
  Firm,
  Stiff,
  VeryStiff,
  Hard,
  NotClay,
}
/**
*/
export enum SoilCompressibility {
  VeryLowCompressibility,
  LowCompressibility,
  MediumCompressibility,
  HighCompressibility,
  VeryHighCompressibility,
}
/**
*/
export enum Cohesive {
  C,
  M,
}
/**
*/
export enum Plasticity {
  NP,
  L,
  I,
  H,
  V,
  E,
}
/**
*/
export enum RockExcavabilityTypes {
  EasyDigging,
  HardDigging,
  EasyRipping,
  HardRipping,
  VeryHardRipping,
  ExtremeRipping,
  Blasting,
}
/**
*/
export enum AcecDsClass {
  Ds1,
  Ds2,
  Ds3,
  Ds4,
  Ds5,
}
/**
*/
export enum AcecDcClass {
  Dc1,
  Dc2,
  Dc3,
  Dc4,
  Dc5,
}
/**
*/
export enum AcecClass {
  Ac1s,
  Ac1,
  Ac2z,
  Ac2,
  Ac2s,
  Ac3,
  Ac3s,
  Ac3z,
  Ac4,
  Ac4m,
  Ac4ms,
  Ac4s,
  Ac4z,
  Ac5,
  Ac5m,
  Ac5z,
}
/**
*/
export enum EurocodeCombinations {
  Da1c1,
  Da1c2,
  Equ,
}
/**
*/
export enum SoilType {
  Silt,
  Clay,
  Sand,
  Gravel,
  Cobbles,
  Boulders,
  LargeBoulders,
}
/**
*/
export enum ParticleSize {
  Fine,
  Medium,
  Coarse,
}
/**
*/
export enum SoilTypeAmount {
  Slightly,
  Very,
  None,
}
/**
*/
export enum Angularity {
  VeryAngular,
  Angular,
  SubAngular,
  SubRounded,
  Rounded,
  WellRounded,
}
/**
*/
export enum Series600Soils {
  _1a,
  _1b,
  _1c,
  _2a,
  _2b,
  _2c,
  _2d,
  _2e,
  _3_,
  _4_,
  _5a,
  _5b,
  _6a,
  _6b,
  _6c,
  _6d,
  _6e,
  _6f1,
  _6f2,
  _6f3,
  _6f4,
  _6f5,
  _6g,
  _6h,
  _6i,
  _6j,
  _6k,
  _6l,
  _6m,
  _6n,
  _6p,
  _6q,
  _6r,
  _7a,
  _7b,
  _7c,
  _7d,
  _7e,
  _7f,
  _7g,
  _7h,
  _7i,
  _8_,
  _9a,
  _9b,
  _9c,
  _9d,
  _9e,
  _9f,
}
/**
*/
export enum EC7Comb {
  DA1c1,
  DA1c2,
}
/**
*/
export class AcecResults {
  free(): void;
}
/**
*/
export class Backfill {
  free(): void;
}
/**
*/
export class BreSD1Tests {
  free(): void;
}
/**
*/
export class Ec7Loads {
  free(): void;
}
/**
*/
export class Foundation {
  free(): void;
/**
*/
  b: number;
/**
*/
  inclination: number;
/**
*/
  l: number;
/**
*/
  level: number;
}
/**
*/
export class GradingTest {
  free(): void;
}
/**
*/
export class GradingTestSample {
  free(): void;
}
/**
*/
export class GradingTestSummary {
  free(): void;
}
/**
*/
export class GroundModel {
  free(): void;
/**
*/
  ground_level: number;
/**
*/
  gw_level: number;
}
/**
*/
export class GroundModels {
  free(): void;
/**
* @returns {number}
*/
  groundwater_depth(): number;
/**
* @returns {bigint}
*/
  number_of_soil_layers(): bigint;
/**
* @param {number} level
* @returns {SoilModel}
*/
  get_soil_at_level(level: number): SoilModel;
}
/**
*/
export class HoekBrownModel {
  free(): void;
/**
* @returns {number}
*/
  mb(): number;
/**
* @returns {number}
*/
  s(): number;
/**
* @returns {number}
*/
  a(): number;
/**
*/
  d: number;
/**
*/
  gsi: number;
/**
*/
  mi: number;
/**
*/
  ucs: number;
}
/**
*/
export class LWall {
  free(): void;
/**
* @returns {number}
*/
  stem_lever_arm(): number;
/**
* @returns {number}
*/
  stem_lever_arm_surcharge(): number;
/**
* @returns {number}
*/
  base_lever_arm(): number;
}
/**
*/
export class LoadComb {
  free(): void;
}
/**
*/
export class Loads {
  free(): void;
}
/**
*/
export class PartialFactors {
  free(): void;
/**
*/
  g_g_fav: number;
/**
*/
  g_g_unfav: number;
/**
*/
  g_q_fav: number;
/**
*/
  g_q_unfav: number;
}
/**
*/
export class ParticleSizeDescription {
  free(): void;
}
/**
*/
export class Soil {
  free(): void;
/**
*/
  base_level: number;
/**
*/
  c: number;
/**
*/
  gamma: number;
/**
*/
  phi: number;
/**
*/
  soil_id: number;
/**
*/
  su: number;
/**
*/
  top_level: number;
}
/**
*/
export class SoilDescription {
  free(): void;
}
/**
*/
export class SoilModel {
  free(): void;
/**
* @param {number} comb
* @returns {number | undefined}
*/
  angle_friction_factored(comb: number): number | undefined;
/**
* @param {number} comb
* @returns {number | undefined}
*/
  undrained_shear_strength_factored(comb: number): number | undefined;
/**
* @returns {number | undefined}
*/
  clay_strength_description(): number | undefined;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_soil_free: (a: number) => void;
  readonly __wbg_get_soil_soil_id: (a: number) => number;
  readonly __wbg_set_soil_soil_id: (a: number, b: number) => void;
  readonly __wbg_get_soil_top_level: (a: number) => number;
  readonly __wbg_set_soil_top_level: (a: number, b: number) => void;
  readonly __wbg_get_soil_base_level: (a: number) => number;
  readonly __wbg_set_soil_base_level: (a: number, b: number) => void;
  readonly __wbg_get_soil_phi: (a: number) => number;
  readonly __wbg_set_soil_phi: (a: number, b: number) => void;
  readonly __wbg_get_soil_gamma: (a: number) => number;
  readonly __wbg_set_soil_gamma: (a: number, b: number) => void;
  readonly __wbg_get_soil_c: (a: number) => number;
  readonly __wbg_set_soil_c: (a: number, b: number) => void;
  readonly __wbg_get_soil_su: (a: number) => number;
  readonly __wbg_set_soil_su: (a: number, b: number) => void;
  readonly __wbg_groundmodel_free: (a: number) => void;
  readonly __wbg_loadcomb_free: (a: number) => void;
  readonly __wbg_ec7loads_free: (a: number) => void;
  readonly __wbg_loads_free: (a: number) => void;
  readonly __wbg_foundation_free: (a: number) => void;
  readonly __wbg_get_foundation_b: (a: number) => number;
  readonly __wbg_set_foundation_b: (a: number, b: number) => void;
  readonly __wbg_get_foundation_l: (a: number) => number;
  readonly __wbg_set_foundation_l: (a: number, b: number) => void;
  readonly __wbg_get_foundation_level: (a: number) => number;
  readonly __wbg_set_foundation_level: (a: number, b: number) => void;
  readonly __wbg_get_foundation_inclination: (a: number) => number;
  readonly __wbg_set_foundation_inclination: (a: number, b: number) => void;
  readonly ecc_b: (a: number) => number;
  readonly ecc_l: (a: number) => number;
  readonly eff_b: (a: number, b: number) => number;
  readonly eff_l: (a: number, b: number) => number;
  readonly eff_a: (a: number, b: number) => number;
  readonly n_q: (a: number) => number;
  readonly n_c: (a: number) => number;
  readonly n_g: (a: number) => number;
  readonly b_g: (a: number, b: number) => number;
  readonly b_c: (a: number, b: number) => number;
  readonly b_c_undrained: (a: number) => number;
  readonly s_q: (a: number, b: number) => number;
  readonly s_g: (a: number) => number;
  readonly s_c: (a: number, b: number) => number;
  readonly s_c_undrained: (a: number) => number;
  readonly resultant_action: (a: number, b: number) => number;
  readonly resultant_action_angle: (a: number, b: number) => number;
  readonly m_b: (a: number) => number;
  readonly m_l: (a: number) => number;
  readonly m: (a: number, b: number) => number;
  readonly i_q: (a: number, b: number, c: number) => number;
  readonly i_g: (a: number, b: number, c: number) => number;
  readonly i_c: (a: number, b: number, c: number) => number;
  readonly i_c_undrained: (a: number, b: number, c: number) => number;
  readonly drained_bearing_capacity: (a: number, b: number, c: number, d: number) => number;
  readonly undrained_bearing_capacity: (a: number, b: number, c: number, d: number) => number;
  readonly bearing_capacity_check: (a: number, b: number, c: number, d: number) => number;
  readonly undrained_bearing_capacity_check: (a: number, b: number, c: number, d: number) => number;
  readonly __wbg_partialfactors_free: (a: number) => void;
  readonly __wbg_get_partialfactors_g_g_unfav: (a: number) => number;
  readonly __wbg_get_partialfactors_g_g_fav: (a: number) => number;
  readonly __wbg_get_groundmodel_ground_level: (a: number) => number;
  readonly __wbg_get_groundmodel_gw_level: (a: number) => number;
  readonly __wbg_get_partialfactors_g_q_unfav: (a: number) => number;
  readonly __wbg_get_partialfactors_g_q_fav: (a: number) => number;
  readonly b_q: (a: number, b: number) => number;
  readonly __wbg_set_partialfactors_g_g_unfav: (a: number, b: number) => void;
  readonly __wbg_set_partialfactors_g_g_fav: (a: number, b: number) => void;
  readonly __wbg_set_groundmodel_ground_level: (a: number, b: number) => void;
  readonly __wbg_set_groundmodel_gw_level: (a: number, b: number) => void;
  readonly __wbg_set_partialfactors_g_q_unfav: (a: number, b: number) => void;
  readonly __wbg_set_partialfactors_g_q_fav: (a: number, b: number) => void;
  readonly stroud_f1: (a: number) => number;
  readonly stroud_f2: (a: number) => number;
  readonly spt_to_cu: (a: number, b: number) => number;
  readonly spt_to_mv: (a: number, b: number) => number;
  readonly cu_val_to_desc: (a: number) => number;
  readonly mv_val_to_desc: (a: number) => number;
  readonly mv_to_e_dash: (a: number, b: number, c: number) => void;
  readonly a_line_check: (a: number, b: number) => number;
  readonly plasticity_check: (a: number) => number;
  readonly __wbg_hoekbrownmodel_free: (a: number) => void;
  readonly __wbg_get_hoekbrownmodel_gsi: (a: number) => number;
  readonly __wbg_set_hoekbrownmodel_gsi: (a: number, b: number) => void;
  readonly __wbg_get_hoekbrownmodel_mi: (a: number) => number;
  readonly __wbg_set_hoekbrownmodel_mi: (a: number, b: number) => void;
  readonly __wbg_get_hoekbrownmodel_d: (a: number) => number;
  readonly __wbg_set_hoekbrownmodel_d: (a: number, b: number) => void;
  readonly __wbg_get_hoekbrownmodel_ucs: (a: number) => number;
  readonly __wbg_set_hoekbrownmodel_ucs: (a: number, b: number) => void;
  readonly hoekbrownmodel_mb: (a: number) => number;
  readonly hoekbrownmodel_s: (a: number) => number;
  readonly hoekbrownmodel_a: (a: number) => number;
  readonly rock_e_val: (a: number) => number;
  readonly mc_phi_conv: (a: number, b: number) => number;
  readonly mcc_dash_conv: (a: number, b: number) => number;
  readonly coefficient_uniformity: (a: number, b: number) => number;
  readonly easy_digging: (a: number, b: number) => number;
  readonly hard_digging: (a: number, b: number) => number;
  readonly easy_ripping: (a: number, b: number) => number;
  readonly hard_ripping: (a: number, b: number) => number;
  readonly very_hard_ripping: (a: number, b: number) => number;
  readonly extreme_ripping: (a: number, b: number) => number;
  readonly excavability_assessment: (a: number, b: number) => number;
  readonly peak_phi_from_pi_lb_nc_clay: (a: number) => number;
  readonly peak_phi_from_pi_bestest_nc_clay: (a: number) => number;
  readonly peak_phi_from_pi_lb_oc_clay: (a: number, b: number) => void;
  readonly peak_phi_from_pi_bestest_oc_clay: (a: number, b: number) => void;
  readonly __wbg_acecresults_free: (a: number) => void;
  readonly __wbg_bresd1tests_free: (a: number) => void;
  readonly soil_particle_size_description: (a: number) => number;
  readonly __wbg_gradingtestsummary_free: (a: number) => void;
  readonly grading_test_result: (a: number) => number;
  readonly __wbg_soildescription_free: (a: number) => void;
  readonly __wbg_soilmodel_free: (a: number) => void;
  readonly soilmodel_angle_friction_factored: (a: number, b: number, c: number) => void;
  readonly soilmodel_undrained_shear_strength_factored: (a: number, b: number, c: number) => void;
  readonly soilmodel_clay_strength_description: (a: number) => number;
  readonly __wbg_groundmodels_free: (a: number) => void;
  readonly groundmodels_groundwater_depth: (a: number) => number;
  readonly groundmodels_number_of_soil_layers: (a: number) => number;
  readonly groundmodels_get_soil_at_level: (a: number, b: number, c: number) => void;
  readonly __wbg_gradingtestsample_free: (a: number) => void;
  readonly __wbg_gradingtest_free: (a: number) => void;
  readonly __wbg_particlesizedescription_free: (a: number) => void;
  readonly __wbg_lwall_free: (a: number) => void;
  readonly lwall_stem_lever_arm: (a: number) => number;
  readonly lwall_stem_lever_arm_surcharge: (a: number) => number;
  readonly lwall_base_lever_arm: (a: number) => number;
  readonly __wbg_backfill_free: (a: number) => void;
  readonly active_earth_pressure_on_wall_self_weight: (a: number, b: number, c: number) => number;
  readonly active_earth_pressure_on_wall_surcharge: (a: number, b: number, c: number, d: number) => number;
  readonly driving_force: (a: number, b: number, c: number, d: number) => number;
  readonly driving_moment: (a: number, b: number, c: number, d: number) => number;
  readonly resisting_force: (a: number, b: number) => number;
  readonly resisting_moment: (a: number, b: number) => number;
  readonly overturning_utilisation: (a: number, b: number, c: number, d: number) => number;
  readonly deg_to_rad: (a: number) => number;
  readonly k0: (a: number) => number;
  readonly rankine_ka: (a: number) => number;
  readonly rankine_kp: (a: number) => number;
  readonly coulomb_ka: (a: number, b: number, c: number, d: number) => number;
  readonly coulomb_kp: (a: number, b: number, c: number, d: number) => number;
  readonly ec7_phi_factor: (a: number, b: number) => number;
  readonly greet: (a: number, b: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
