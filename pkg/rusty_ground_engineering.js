
let wasm;

const cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8Memory0 = new Uint8Array();

function getUint8Memory0() {
    if (cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
}
/**
* @param {Loads} loads
* @returns {number}
*/
export function ecc_b(loads) {
    _assertClass(loads, Loads);
    var ptr0 = loads.ptr;
    loads.ptr = 0;
    const ret = wasm.ecc_b(ptr0);
    return ret;
}

/**
* @param {Loads} loads
* @returns {number}
*/
export function ecc_l(loads) {
    _assertClass(loads, Loads);
    var ptr0 = loads.ptr;
    loads.ptr = 0;
    const ret = wasm.ecc_l(ptr0);
    return ret;
}

/**
* @param {Foundation} foundation
* @param {Loads} loads
* @returns {number}
*/
export function eff_b(foundation, loads) {
    _assertClass(foundation, Foundation);
    var ptr0 = foundation.ptr;
    foundation.ptr = 0;
    _assertClass(loads, Loads);
    var ptr1 = loads.ptr;
    loads.ptr = 0;
    const ret = wasm.eff_b(ptr0, ptr1);
    return ret;
}

/**
* @param {Foundation} foundation
* @param {Loads} loads
* @returns {number}
*/
export function eff_l(foundation, loads) {
    _assertClass(foundation, Foundation);
    var ptr0 = foundation.ptr;
    foundation.ptr = 0;
    _assertClass(loads, Loads);
    var ptr1 = loads.ptr;
    loads.ptr = 0;
    const ret = wasm.eff_l(ptr0, ptr1);
    return ret;
}

/**
* @param {Foundation} foundation
* @param {Loads} loads
* @returns {number}
*/
export function eff_a(foundation, loads) {
    _assertClass(foundation, Foundation);
    var ptr0 = foundation.ptr;
    foundation.ptr = 0;
    _assertClass(loads, Loads);
    var ptr1 = loads.ptr;
    loads.ptr = 0;
    const ret = wasm.eff_a(ptr0, ptr1);
    return ret;
}

/**
* @param {number} phi
* @returns {number}
*/
export function n_q(phi) {
    const ret = wasm.n_q(phi);
    return ret;
}

/**
* @param {number} phi
* @returns {number}
*/
export function n_c(phi) {
    const ret = wasm.n_c(phi);
    return ret;
}

/**
* @param {number} phi
* @returns {number}
*/
export function n_g(phi) {
    const ret = wasm.n_g(phi);
    return ret;
}

/**
* @param {Foundation} foundation
* @param {Soil} soil
* @returns {number}
*/
export function b_q(foundation, soil) {
    _assertClass(foundation, Foundation);
    var ptr0 = foundation.ptr;
    foundation.ptr = 0;
    _assertClass(soil, Soil);
    var ptr1 = soil.ptr;
    soil.ptr = 0;
    const ret = wasm.b_g(ptr0, ptr1);
    return ret;
}

/**
* @param {Foundation} foundation
* @param {Soil} soil
* @returns {number}
*/
export function b_g(foundation, soil) {
    _assertClass(foundation, Foundation);
    var ptr0 = foundation.ptr;
    foundation.ptr = 0;
    _assertClass(soil, Soil);
    var ptr1 = soil.ptr;
    soil.ptr = 0;
    const ret = wasm.b_g(ptr0, ptr1);
    return ret;
}

/**
* @param {Foundation} foundation
* @param {Soil} soil
* @returns {number}
*/
export function b_c(foundation, soil) {
    _assertClass(foundation, Foundation);
    var ptr0 = foundation.ptr;
    foundation.ptr = 0;
    _assertClass(soil, Soil);
    var ptr1 = soil.ptr;
    soil.ptr = 0;
    const ret = wasm.b_c(ptr0, ptr1);
    return ret;
}

/**
* @param {Foundation} foundation
* @returns {number}
*/
export function b_c_undrained(foundation) {
    _assertClass(foundation, Foundation);
    var ptr0 = foundation.ptr;
    foundation.ptr = 0;
    const ret = wasm.b_c_undrained(ptr0);
    return ret;
}

/**
* @param {Foundation} foundation
* @param {Soil} soil
* @returns {number}
*/
export function s_q(foundation, soil) {
    _assertClass(foundation, Foundation);
    var ptr0 = foundation.ptr;
    foundation.ptr = 0;
    _assertClass(soil, Soil);
    var ptr1 = soil.ptr;
    soil.ptr = 0;
    const ret = wasm.s_q(ptr0, ptr1);
    return ret;
}

/**
* @param {Foundation} foundation
* @returns {number}
*/
export function s_g(foundation) {
    _assertClass(foundation, Foundation);
    var ptr0 = foundation.ptr;
    foundation.ptr = 0;
    const ret = wasm.s_g(ptr0);
    return ret;
}

/**
* @param {Foundation} foundation
* @param {Soil} soil
* @returns {number}
*/
export function s_c(foundation, soil) {
    _assertClass(foundation, Foundation);
    var ptr0 = foundation.ptr;
    foundation.ptr = 0;
    _assertClass(soil, Soil);
    var ptr1 = soil.ptr;
    soil.ptr = 0;
    const ret = wasm.s_c(ptr0, ptr1);
    return ret;
}

/**
* @param {Foundation} foundation
* @returns {number}
*/
export function s_c_undrained(foundation) {
    _assertClass(foundation, Foundation);
    var ptr0 = foundation.ptr;
    foundation.ptr = 0;
    const ret = wasm.s_c_undrained(ptr0);
    return ret;
}

/**
* @param {number} f_x
* @param {number} f_y
* @returns {number}
*/
export function resultant_action(f_x, f_y) {
    const ret = wasm.resultant_action(f_x, f_y);
    return ret;
}

/**
* @param {number} f_x
* @param {number} f_y
* @returns {number}
*/
export function resultant_action_angle(f_x, f_y) {
    const ret = wasm.resultant_action_angle(f_x, f_y);
    return ret;
}

/**
* @param {Foundation} foundation
* @returns {number}
*/
export function m_b(foundation) {
    _assertClass(foundation, Foundation);
    var ptr0 = foundation.ptr;
    foundation.ptr = 0;
    const ret = wasm.m_b(ptr0);
    return ret;
}

/**
* @param {Foundation} foundation
* @returns {number}
*/
export function m_l(foundation) {
    _assertClass(foundation, Foundation);
    var ptr0 = foundation.ptr;
    foundation.ptr = 0;
    const ret = wasm.m_l(ptr0);
    return ret;
}

/**
* @param {Loads} loads
* @param {Foundation} foundation
* @returns {number}
*/
export function m(loads, foundation) {
    _assertClass(loads, Loads);
    var ptr0 = loads.ptr;
    loads.ptr = 0;
    _assertClass(foundation, Foundation);
    var ptr1 = foundation.ptr;
    foundation.ptr = 0;
    const ret = wasm.m(ptr0, ptr1);
    return ret;
}

/**
* @param {Loads} loads
* @param {Foundation} foundation
* @param {Soil} soil
* @returns {number}
*/
export function i_q(loads, foundation, soil) {
    _assertClass(loads, Loads);
    var ptr0 = loads.ptr;
    loads.ptr = 0;
    _assertClass(foundation, Foundation);
    var ptr1 = foundation.ptr;
    foundation.ptr = 0;
    _assertClass(soil, Soil);
    var ptr2 = soil.ptr;
    soil.ptr = 0;
    const ret = wasm.i_q(ptr0, ptr1, ptr2);
    return ret;
}

/**
* @param {Loads} loads
* @param {Foundation} foundation
* @param {Soil} soil
* @returns {number}
*/
export function i_g(loads, foundation, soil) {
    _assertClass(loads, Loads);
    var ptr0 = loads.ptr;
    loads.ptr = 0;
    _assertClass(foundation, Foundation);
    var ptr1 = foundation.ptr;
    foundation.ptr = 0;
    _assertClass(soil, Soil);
    var ptr2 = soil.ptr;
    soil.ptr = 0;
    const ret = wasm.i_g(ptr0, ptr1, ptr2);
    return ret;
}

/**
* @param {Loads} loads
* @param {Foundation} foundation
* @param {Soil} soil
* @returns {number}
*/
export function i_c(loads, foundation, soil) {
    _assertClass(loads, Loads);
    var ptr0 = loads.ptr;
    loads.ptr = 0;
    _assertClass(foundation, Foundation);
    var ptr1 = foundation.ptr;
    foundation.ptr = 0;
    _assertClass(soil, Soil);
    var ptr2 = soil.ptr;
    soil.ptr = 0;
    const ret = wasm.i_c(ptr0, ptr1, ptr2);
    return ret;
}

/**
* @param {Loads} loads
* @param {Foundation} foundation
* @param {Soil} soil
* @returns {number}
*/
export function i_c_undrained(loads, foundation, soil) {
    _assertClass(loads, Loads);
    var ptr0 = loads.ptr;
    loads.ptr = 0;
    _assertClass(foundation, Foundation);
    var ptr1 = foundation.ptr;
    foundation.ptr = 0;
    _assertClass(soil, Soil);
    var ptr2 = soil.ptr;
    soil.ptr = 0;
    const ret = wasm.i_c_undrained(ptr0, ptr1, ptr2);
    return ret;
}

/**
* @param {Loads} loads
* @param {Foundation} foundation
* @param {Soil} soil
* @param {GroundModel} ground_model
* @returns {number}
*/
export function drained_bearing_capacity(loads, foundation, soil, ground_model) {
    _assertClass(loads, Loads);
    var ptr0 = loads.ptr;
    loads.ptr = 0;
    _assertClass(foundation, Foundation);
    var ptr1 = foundation.ptr;
    foundation.ptr = 0;
    _assertClass(soil, Soil);
    var ptr2 = soil.ptr;
    soil.ptr = 0;
    _assertClass(ground_model, GroundModel);
    var ptr3 = ground_model.ptr;
    ground_model.ptr = 0;
    const ret = wasm.drained_bearing_capacity(ptr0, ptr1, ptr2, ptr3);
    return ret;
}

/**
* @param {Loads} loads
* @param {Foundation} foundation
* @param {Soil} soil
* @param {GroundModel} ground_model
* @returns {number}
*/
export function undrained_bearing_capacity(loads, foundation, soil, ground_model) {
    _assertClass(loads, Loads);
    var ptr0 = loads.ptr;
    loads.ptr = 0;
    _assertClass(foundation, Foundation);
    var ptr1 = foundation.ptr;
    foundation.ptr = 0;
    _assertClass(soil, Soil);
    var ptr2 = soil.ptr;
    soil.ptr = 0;
    _assertClass(ground_model, GroundModel);
    var ptr3 = ground_model.ptr;
    ground_model.ptr = 0;
    const ret = wasm.undrained_bearing_capacity(ptr0, ptr1, ptr2, ptr3);
    return ret;
}

/**
* @param {Loads} loads
* @param {Foundation} foundation
* @param {Soil} soil
* @param {GroundModel} ground_model
* @returns {number}
*/
export function bearing_capacity_check(loads, foundation, soil, ground_model) {
    _assertClass(loads, Loads);
    var ptr0 = loads.ptr;
    loads.ptr = 0;
    _assertClass(foundation, Foundation);
    var ptr1 = foundation.ptr;
    foundation.ptr = 0;
    _assertClass(soil, Soil);
    var ptr2 = soil.ptr;
    soil.ptr = 0;
    _assertClass(ground_model, GroundModel);
    var ptr3 = ground_model.ptr;
    ground_model.ptr = 0;
    const ret = wasm.bearing_capacity_check(ptr0, ptr1, ptr2, ptr3);
    return ret;
}

/**
* @param {Loads} loads
* @param {Foundation} foundation
* @param {Soil} soil
* @param {GroundModel} ground_model
* @returns {number}
*/
export function undrained_bearing_capacity_check(loads, foundation, soil, ground_model) {
    _assertClass(loads, Loads);
    var ptr0 = loads.ptr;
    loads.ptr = 0;
    _assertClass(foundation, Foundation);
    var ptr1 = foundation.ptr;
    foundation.ptr = 0;
    _assertClass(soil, Soil);
    var ptr2 = soil.ptr;
    soil.ptr = 0;
    _assertClass(ground_model, GroundModel);
    var ptr3 = ground_model.ptr;
    ground_model.ptr = 0;
    const ret = wasm.undrained_bearing_capacity_check(ptr0, ptr1, ptr2, ptr3);
    return ret;
}

/**
* @param {number} pi
* @returns {number}
*/
export function stroud_f1(pi) {
    const ret = wasm.stroud_f1(pi);
    return ret;
}

/**
* @param {number} pi
* @returns {number}
*/
export function stroud_f2(pi) {
    const ret = wasm.stroud_f2(pi);
    return ret;
}

/**
* @param {number} pi
* @param {number} n
* @returns {number}
*/
export function spt_to_cu(pi, n) {
    const ret = wasm.spt_to_cu(pi, n);
    return ret;
}

/**
* @param {number} pi
* @param {number} n
* @returns {number}
*/
export function spt_to_mv(pi, n) {
    const ret = wasm.spt_to_mv(pi, n);
    return ret;
}

/**
* @param {number} cu
* @returns {number}
*/
export function cu_val_to_desc(cu) {
    const ret = wasm.cu_val_to_desc(cu);
    return ret >>> 0;
}

/**
* @param {number} mv
* @returns {number}
*/
export function mv_val_to_desc(mv) {
    const ret = wasm.mv_val_to_desc(mv);
    return ret >>> 0;
}

let cachedFloat64Memory0 = new Float64Array();

function getFloat64Memory0() {
    if (cachedFloat64Memory0.byteLength === 0) {
        cachedFloat64Memory0 = new Float64Array(wasm.memory.buffer);
    }
    return cachedFloat64Memory0;
}

let cachedInt32Memory0 = new Int32Array();

function getInt32Memory0() {
    if (cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}

function getObject(idx) { return heap[idx]; }

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}
/**
* @param {number} mv
* @param {number} nu
* @returns {number}
*/
export function mv_to_e_dash(mv, nu) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.mv_to_e_dash(retptr, mv, nu);
        var r0 = getFloat64Memory0()[retptr / 8 + 0];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        var r3 = getInt32Memory0()[retptr / 4 + 3];
        if (r3) {
            throw takeObject(r2);
        }
        return r0;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} pi
* @param {number} ll
* @returns {number}
*/
export function a_line_check(pi, ll) {
    const ret = wasm.a_line_check(pi, ll);
    return ret >>> 0;
}

/**
* @param {number} pi
* @returns {number}
*/
export function plasticity_check(pi) {
    const ret = wasm.plasticity_check(pi);
    return ret >>> 0;
}

/**
* @param {HoekBrownModel} hbm
* @returns {number}
*/
export function rock_e_val(hbm) {
    _assertClass(hbm, HoekBrownModel);
    var ptr0 = hbm.ptr;
    hbm.ptr = 0;
    const ret = wasm.rock_e_val(ptr0);
    return ret;
}

/**
* @param {number} sig3max
* @param {HoekBrownModel} hbm
* @returns {number}
*/
export function mc_phi_conv(sig3max, hbm) {
    _assertClass(hbm, HoekBrownModel);
    var ptr0 = hbm.ptr;
    hbm.ptr = 0;
    const ret = wasm.mc_phi_conv(sig3max, ptr0);
    return ret;
}

/**
* @param {number} sig3max
* @param {HoekBrownModel} hbm
* @returns {number}
*/
export function mcc_dash_conv(sig3max, hbm) {
    _assertClass(hbm, HoekBrownModel);
    var ptr0 = hbm.ptr;
    hbm.ptr = 0;
    const ret = wasm.mcc_dash_conv(sig3max, ptr0);
    return ret;
}

/**
*
*
* @param {number} d60
* @param {number} d10
* @returns {number}
*/
export function coefficient_uniformity(d60, d10) {
    const ret = wasm.coefficient_uniformity(d60, d10);
    return ret;
}

/**
* @param {number} is50
* @param {number} disc
* @returns {boolean}
*/
export function easy_digging(is50, disc) {
    const ret = wasm.easy_digging(is50, disc);
    return ret !== 0;
}

/**
* @param {number} is50
* @param {number} disc
* @returns {boolean}
*/
export function hard_digging(is50, disc) {
    const ret = wasm.hard_digging(is50, disc);
    return ret !== 0;
}

/**
* @param {number} is50
* @param {number} disc
* @returns {boolean}
*/
export function easy_ripping(is50, disc) {
    const ret = wasm.easy_ripping(is50, disc);
    return ret !== 0;
}

/**
* @param {number} is50
* @param {number} disc
* @returns {boolean}
*/
export function hard_ripping(is50, disc) {
    const ret = wasm.hard_ripping(is50, disc);
    return ret !== 0;
}

/**
* @param {number} is50
* @param {number} disc
* @returns {boolean}
*/
export function very_hard_ripping(is50, disc) {
    const ret = wasm.very_hard_ripping(is50, disc);
    return ret !== 0;
}

/**
* @param {number} is50
* @param {number} disc
* @returns {boolean}
*/
export function extreme_ripping(is50, disc) {
    const ret = wasm.extreme_ripping(is50, disc);
    return ret !== 0;
}

/**
* Calculates the excavability of a rock mass
*
* The function take Point Load Index (is50), MPa and Discontinnuity Spacing Index (Ir), m, and returns a enum containing the type of excavation required for that rock mass
* @param {number} is50
* @param {number} disc
* @returns {number}
*/
export function excavability_assessment(is50, disc) {
    const ret = wasm.excavability_assessment(is50, disc);
    return ret >>> 0;
}

/**
* @param {number} PI
* @returns {number}
*/
export function peak_phi_from_pi_lb_nc_clay(PI) {
    const ret = wasm.peak_phi_from_pi_lb_nc_clay(PI);
    return ret;
}

/**
* @param {number} PI
* @returns {number}
*/
export function peak_phi_from_pi_bestest_nc_clay(PI) {
    const ret = wasm.peak_phi_from_pi_bestest_nc_clay(PI);
    return ret;
}

/**
* @param {number} PI
* @returns {number}
*/
export function peak_phi_from_pi_lb_oc_clay(PI) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.peak_phi_from_pi_lb_oc_clay(retptr, PI);
        var r0 = getFloat64Memory0()[retptr / 8 + 0];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        var r3 = getInt32Memory0()[retptr / 4 + 3];
        if (r3) {
            throw takeObject(r2);
        }
        return r0;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} PI
* @returns {number}
*/
export function peak_phi_from_pi_bestest_oc_clay(PI) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.peak_phi_from_pi_bestest_oc_clay(retptr, PI);
        var r0 = getFloat64Memory0()[retptr / 8 + 0];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        var r3 = getInt32Memory0()[retptr / 4 + 3];
        if (r3) {
            throw takeObject(r2);
        }
        return r0;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} particle_size
* @returns {ParticleSizeDescription}
*/
export function soil_particle_size_description(particle_size) {
    const ret = wasm.soil_particle_size_description(particle_size);
    return ParticleSizeDescription.__wrap(ret);
}

/**
* @param {GradingTest} test_results
* @returns {GradingTestSummary}
*/
export function grading_test_result(test_results) {
    _assertClass(test_results, GradingTest);
    var ptr0 = test_results.ptr;
    test_results.ptr = 0;
    const ret = wasm.grading_test_result(ptr0);
    return GradingTestSummary.__wrap(ret);
}

/**
* @param {LWall} dims
* @param {Backfill} fill
* @param {number} slope_angle
* @returns {number}
*/
export function active_earth_pressure_on_wall_self_weight(dims, fill, slope_angle) {
    _assertClass(dims, LWall);
    var ptr0 = dims.ptr;
    dims.ptr = 0;
    _assertClass(fill, Backfill);
    var ptr1 = fill.ptr;
    fill.ptr = 0;
    const ret = wasm.active_earth_pressure_on_wall_self_weight(ptr0, ptr1, slope_angle);
    return ret;
}

/**
* @param {LWall} dims
* @param {Backfill} fill
* @param {number} slope_angle
* @param {number} surcharge
* @returns {number}
*/
export function active_earth_pressure_on_wall_surcharge(dims, fill, slope_angle, surcharge) {
    _assertClass(dims, LWall);
    var ptr0 = dims.ptr;
    dims.ptr = 0;
    _assertClass(fill, Backfill);
    var ptr1 = fill.ptr;
    fill.ptr = 0;
    const ret = wasm.active_earth_pressure_on_wall_surcharge(ptr0, ptr1, slope_angle, surcharge);
    return ret;
}

/**
* @param {LWall} dims
* @param {Backfill} fill
* @param {number} slope_angle
* @param {number} surcharge
* @returns {number}
*/
export function driving_force(dims, fill, slope_angle, surcharge) {
    _assertClass(dims, LWall);
    var ptr0 = dims.ptr;
    dims.ptr = 0;
    _assertClass(fill, Backfill);
    var ptr1 = fill.ptr;
    fill.ptr = 0;
    const ret = wasm.driving_force(ptr0, ptr1, slope_angle, surcharge);
    return ret;
}

/**
* @param {LWall} dims
* @param {Backfill} fill
* @param {number} slope_angle
* @param {number} surcharge
* @returns {number}
*/
export function driving_moment(dims, fill, slope_angle, surcharge) {
    _assertClass(dims, LWall);
    var ptr0 = dims.ptr;
    dims.ptr = 0;
    _assertClass(fill, Backfill);
    var ptr1 = fill.ptr;
    fill.ptr = 0;
    const ret = wasm.driving_moment(ptr0, ptr1, slope_angle, surcharge);
    return ret;
}

/**
* @param {LWall} dims
* @param {Backfill} fill
* @returns {number}
*/
export function resisting_force(dims, fill) {
    _assertClass(dims, LWall);
    var ptr0 = dims.ptr;
    dims.ptr = 0;
    _assertClass(fill, Backfill);
    var ptr1 = fill.ptr;
    fill.ptr = 0;
    const ret = wasm.resisting_force(ptr0, ptr1);
    return ret;
}

/**
* @param {LWall} dims
* @param {Backfill} fill
* @returns {number}
*/
export function resisting_moment(dims, fill) {
    _assertClass(dims, LWall);
    var ptr0 = dims.ptr;
    dims.ptr = 0;
    _assertClass(fill, Backfill);
    var ptr1 = fill.ptr;
    fill.ptr = 0;
    const ret = wasm.resisting_moment(ptr0, ptr1);
    return ret;
}

/**
* @param {LWall} dims
* @param {Backfill} fill
* @param {number} slope_angle
* @param {number} surcharge
* @returns {number}
*/
export function overturning_utilisation(dims, fill, slope_angle, surcharge) {
    _assertClass(dims, LWall);
    var ptr0 = dims.ptr;
    dims.ptr = 0;
    _assertClass(fill, Backfill);
    var ptr1 = fill.ptr;
    fill.ptr = 0;
    const ret = wasm.overturning_utilisation(ptr0, ptr1, slope_angle, surcharge);
    return ret;
}

/**
* @param {number} angle
* @returns {number}
*/
export function deg_to_rad(angle) {
    const ret = wasm.deg_to_rad(angle);
    return ret;
}

/**
* @param {number} phi
* @returns {number}
*/
export function k0(phi) {
    const ret = wasm.k0(phi);
    return ret;
}

/**
* @param {number} phi
* @returns {number}
*/
export function rankine_ka(phi) {
    const ret = wasm.rankine_ka(phi);
    return ret;
}

/**
* @param {number} phi
* @returns {number}
*/
export function rankine_kp(phi) {
    const ret = wasm.rankine_kp(phi);
    return ret;
}

/**
* @param {number} phi
* @param {number} alpha
* @param {number} delta
* @param {number} sigma
* @returns {number}
*/
export function coulomb_ka(phi, alpha, delta, sigma) {
    const ret = wasm.coulomb_ka(phi, alpha, delta, sigma);
    return ret;
}

/**
* @param {number} phi
* @param {number} alpha
* @param {number} delta
* @param {number} sigma
* @returns {number}
*/
export function coulomb_kp(phi, alpha, delta, sigma) {
    const ret = wasm.coulomb_kp(phi, alpha, delta, sigma);
    return ret;
}

/**
* @param {number} phi
* @param {number} comb
* @returns {number}
*/
export function ec7_phi_factor(phi, comb) {
    const ret = wasm.ec7_phi_factor(phi, comb);
    return ret;
}

let WASM_VECTOR_LEN = 0;

const cachedTextEncoder = new TextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}
/**
* @param {string} name
*/
export function greet(name) {
    const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.greet(ptr0, len0);
}

/**
*/
export const LoadStruct = Object.freeze({ Favorable:0,"0":"Favorable",Unfavorable:1,"1":"Unfavorable", });
/**
*/
export const LoadState = Object.freeze({ Perm:0,"0":"Perm",Var:1,"1":"Var", });
/**
*/
export const Ec7Comb = Object.freeze({ DA1c1:0,"0":"DA1c1",DA1c2:1,"1":"DA1c2",EQU:2,"2":"EQU", });
/**
*/
export const SoilStrengths = Object.freeze({ VerySoft:0,"0":"VerySoft",Soft:1,"1":"Soft",Firm:2,"2":"Firm",Stiff:3,"3":"Stiff",VeryStiff:4,"4":"VeryStiff",Hard:5,"5":"Hard",NotClay:6,"6":"NotClay", });
/**
*/
export const SoilCompressibility = Object.freeze({ VeryLowCompressibility:0,"0":"VeryLowCompressibility",LowCompressibility:1,"1":"LowCompressibility",MediumCompressibility:2,"2":"MediumCompressibility",HighCompressibility:3,"3":"HighCompressibility",VeryHighCompressibility:4,"4":"VeryHighCompressibility", });
/**
*/
export const Cohesive = Object.freeze({ C:0,"0":"C",M:1,"1":"M", });
/**
*/
export const Plasticity = Object.freeze({ NP:0,"0":"NP",L:1,"1":"L",I:2,"2":"I",H:3,"3":"H",V:4,"4":"V",E:5,"5":"E", });
/**
*/
export const RockExcavabilityTypes = Object.freeze({ EasyDigging:0,"0":"EasyDigging",HardDigging:1,"1":"HardDigging",EasyRipping:2,"2":"EasyRipping",HardRipping:3,"3":"HardRipping",VeryHardRipping:4,"4":"VeryHardRipping",ExtremeRipping:5,"5":"ExtremeRipping",Blasting:6,"6":"Blasting", });
/**
*/
export const AcecDsClass = Object.freeze({ Ds1:0,"0":"Ds1",Ds2:1,"1":"Ds2",Ds3:2,"2":"Ds3",Ds4:3,"3":"Ds4",Ds5:4,"4":"Ds5", });
/**
*/
export const AcecDcClass = Object.freeze({ Dc1:0,"0":"Dc1",Dc2:1,"1":"Dc2",Dc3:2,"2":"Dc3",Dc4:3,"3":"Dc4",Dc5:4,"4":"Dc5", });
/**
*/
export const AcecClass = Object.freeze({ Ac1s:0,"0":"Ac1s",Ac1:1,"1":"Ac1",Ac2z:2,"2":"Ac2z",Ac2:3,"3":"Ac2",Ac2s:4,"4":"Ac2s",Ac3:5,"5":"Ac3",Ac3s:6,"6":"Ac3s",Ac3z:7,"7":"Ac3z",Ac4:8,"8":"Ac4",Ac4m:9,"9":"Ac4m",Ac4ms:10,"10":"Ac4ms",Ac4s:11,"11":"Ac4s",Ac4z:12,"12":"Ac4z",Ac5:13,"13":"Ac5",Ac5m:14,"14":"Ac5m",Ac5z:15,"15":"Ac5z", });
/**
*/
export const EurocodeCombinations = Object.freeze({ Da1c1:0,"0":"Da1c1",Da1c2:1,"1":"Da1c2",Equ:2,"2":"Equ", });
/**
*/
export const SoilType = Object.freeze({ Silt:0,"0":"Silt",Clay:1,"1":"Clay",Sand:2,"2":"Sand",Gravel:3,"3":"Gravel",Cobbles:4,"4":"Cobbles",Boulders:5,"5":"Boulders",LargeBoulders:6,"6":"LargeBoulders", });
/**
*/
export const ParticleSize = Object.freeze({ Fine:0,"0":"Fine",Medium:1,"1":"Medium",Coarse:2,"2":"Coarse", });
/**
*/
export const SoilTypeAmount = Object.freeze({ Slightly:0,"0":"Slightly",Very:1,"1":"Very",None:2,"2":"None", });
/**
*/
export const Angularity = Object.freeze({ VeryAngular:0,"0":"VeryAngular",Angular:1,"1":"Angular",SubAngular:2,"2":"SubAngular",SubRounded:3,"3":"SubRounded",Rounded:4,"4":"Rounded",WellRounded:5,"5":"WellRounded", });
/**
*/
export const Series600Soils = Object.freeze({ _1a:0,"0":"_1a",_1b:1,"1":"_1b",_1c:2,"2":"_1c",_2a:3,"3":"_2a",_2b:4,"4":"_2b",_2c:5,"5":"_2c",_2d:6,"6":"_2d",_2e:7,"7":"_2e",_3_:8,"8":"_3_",_4_:9,"9":"_4_",_5a:10,"10":"_5a",_5b:11,"11":"_5b",_6a:12,"12":"_6a",_6b:13,"13":"_6b",_6c:14,"14":"_6c",_6d:15,"15":"_6d",_6e:16,"16":"_6e",_6f1:17,"17":"_6f1",_6f2:18,"18":"_6f2",_6f3:19,"19":"_6f3",_6f4:20,"20":"_6f4",_6f5:21,"21":"_6f5",_6g:22,"22":"_6g",_6h:23,"23":"_6h",_6i:24,"24":"_6i",_6j:25,"25":"_6j",_6k:26,"26":"_6k",_6l:27,"27":"_6l",_6m:28,"28":"_6m",_6n:29,"29":"_6n",_6p:30,"30":"_6p",_6q:31,"31":"_6q",_6r:32,"32":"_6r",_7a:33,"33":"_7a",_7b:34,"34":"_7b",_7c:35,"35":"_7c",_7d:36,"36":"_7d",_7e:37,"37":"_7e",_7f:38,"38":"_7f",_7g:39,"39":"_7g",_7h:40,"40":"_7h",_7i:41,"41":"_7i",_8_:42,"42":"_8_",_9a:43,"43":"_9a",_9b:44,"44":"_9b",_9c:45,"45":"_9c",_9d:46,"46":"_9d",_9e:47,"47":"_9e",_9f:48,"48":"_9f", });
/**
*/
export const EC7Comb = Object.freeze({ DA1c1:0,"0":"DA1c1",DA1c2:1,"1":"DA1c2", });
/**
*/
export class AcecResults {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_acecresults_free(ptr);
    }
}
/**
*/
export class Backfill {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_backfill_free(ptr);
    }
}
/**
*/
export class BreSD1Tests {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_bresd1tests_free(ptr);
    }
}
/**
*/
export class Ec7Loads {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_ec7loads_free(ptr);
    }
}
/**
*/
export class Foundation {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_foundation_free(ptr);
    }
    /**
    * @returns {number}
    */
    get b() {
        const ret = wasm.__wbg_get_foundation_b(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set b(arg0) {
        wasm.__wbg_set_foundation_b(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get l() {
        const ret = wasm.__wbg_get_foundation_l(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set l(arg0) {
        wasm.__wbg_set_foundation_l(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get level() {
        const ret = wasm.__wbg_get_foundation_level(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set level(arg0) {
        wasm.__wbg_set_foundation_level(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get inclination() {
        const ret = wasm.__wbg_get_foundation_inclination(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set inclination(arg0) {
        wasm.__wbg_set_foundation_inclination(this.ptr, arg0);
    }
}
/**
*/
export class GradingTest {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_gradingtest_free(ptr);
    }
}
/**
*/
export class GradingTestSample {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_gradingtestsample_free(ptr);
    }
}
/**
*/
export class GradingTestSummary {

    static __wrap(ptr) {
        const obj = Object.create(GradingTestSummary.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_gradingtestsummary_free(ptr);
    }
}
/**
*/
export class GroundModel {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_groundmodel_free(ptr);
    }
    /**
    * @returns {number}
    */
    get ground_level() {
        const ret = wasm.__wbg_get_foundation_b(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set ground_level(arg0) {
        wasm.__wbg_set_foundation_b(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get gw_level() {
        const ret = wasm.__wbg_get_foundation_l(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set gw_level(arg0) {
        wasm.__wbg_set_foundation_l(this.ptr, arg0);
    }
}
/**
*/
export class GroundModels {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_groundmodels_free(ptr);
    }
    /**
    * @returns {number}
    */
    groundwater_depth() {
        const ret = wasm.groundmodels_groundwater_depth(this.ptr);
        return ret;
    }
    /**
    * @returns {bigint}
    */
    number_of_soil_layers() {
        const ret = wasm.groundmodels_number_of_soil_layers(this.ptr);
        return ret;
    }
    /**
    * @param {number} level
    * @returns {SoilModel}
    */
    get_soil_at_level(level) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.groundmodels_get_soil_at_level(retptr, this.ptr, level);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var r2 = getInt32Memory0()[retptr / 4 + 2];
            if (r2) {
                throw takeObject(r1);
            }
            return SoilModel.__wrap(r0);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class HoekBrownModel {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_hoekbrownmodel_free(ptr);
    }
    /**
    * @returns {number}
    */
    get gsi() {
        const ret = wasm.__wbg_get_hoekbrownmodel_gsi(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set gsi(arg0) {
        wasm.__wbg_set_hoekbrownmodel_gsi(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get mi() {
        const ret = wasm.__wbg_get_hoekbrownmodel_mi(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set mi(arg0) {
        wasm.__wbg_set_hoekbrownmodel_mi(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get d() {
        const ret = wasm.__wbg_get_hoekbrownmodel_d(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set d(arg0) {
        wasm.__wbg_set_hoekbrownmodel_d(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get ucs() {
        const ret = wasm.__wbg_get_hoekbrownmodel_ucs(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set ucs(arg0) {
        wasm.__wbg_set_hoekbrownmodel_ucs(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    mb() {
        const ret = wasm.hoekbrownmodel_mb(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    s() {
        const ret = wasm.hoekbrownmodel_s(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    a() {
        const ret = wasm.hoekbrownmodel_a(this.ptr);
        return ret;
    }
}
/**
*/
export class LWall {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_lwall_free(ptr);
    }
    /**
    * @returns {number}
    */
    stem_lever_arm() {
        const ret = wasm.lwall_stem_lever_arm(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    stem_lever_arm_surcharge() {
        const ret = wasm.lwall_stem_lever_arm_surcharge(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    base_lever_arm() {
        const ret = wasm.lwall_base_lever_arm(this.ptr);
        return ret;
    }
}
/**
*/
export class LoadComb {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_loadcomb_free(ptr);
    }
}
/**
*/
export class Loads {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_loads_free(ptr);
    }
}
/**
*/
export class PartialFactors {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_partialfactors_free(ptr);
    }
    /**
    * @returns {number}
    */
    get g_g_unfav() {
        const ret = wasm.__wbg_get_foundation_b(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set g_g_unfav(arg0) {
        wasm.__wbg_set_foundation_b(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get g_g_fav() {
        const ret = wasm.__wbg_get_foundation_l(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set g_g_fav(arg0) {
        wasm.__wbg_set_foundation_l(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get g_q_unfav() {
        const ret = wasm.__wbg_get_foundation_level(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set g_q_unfav(arg0) {
        wasm.__wbg_set_foundation_level(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get g_q_fav() {
        const ret = wasm.__wbg_get_foundation_inclination(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set g_q_fav(arg0) {
        wasm.__wbg_set_foundation_inclination(this.ptr, arg0);
    }
}
/**
*/
export class ParticleSizeDescription {

    static __wrap(ptr) {
        const obj = Object.create(ParticleSizeDescription.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_particlesizedescription_free(ptr);
    }
}
/**
*/
export class Soil {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_soil_free(ptr);
    }
    /**
    * @returns {number}
    */
    get soil_id() {
        const ret = wasm.__wbg_get_soil_soil_id(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set soil_id(arg0) {
        wasm.__wbg_set_soil_soil_id(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get top_level() {
        const ret = wasm.__wbg_get_soil_top_level(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set top_level(arg0) {
        wasm.__wbg_set_soil_top_level(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get base_level() {
        const ret = wasm.__wbg_get_soil_base_level(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set base_level(arg0) {
        wasm.__wbg_set_soil_base_level(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get phi() {
        const ret = wasm.__wbg_get_soil_phi(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set phi(arg0) {
        wasm.__wbg_set_soil_phi(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get gamma() {
        const ret = wasm.__wbg_get_soil_gamma(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set gamma(arg0) {
        wasm.__wbg_set_soil_gamma(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get c() {
        const ret = wasm.__wbg_get_soil_c(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set c(arg0) {
        wasm.__wbg_set_soil_c(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get su() {
        const ret = wasm.__wbg_get_soil_su(this.ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set su(arg0) {
        wasm.__wbg_set_soil_su(this.ptr, arg0);
    }
}
/**
*/
export class SoilDescription {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_soildescription_free(ptr);
    }
}
/**
*/
export class SoilModel {

    static __wrap(ptr) {
        const obj = Object.create(SoilModel.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_soilmodel_free(ptr);
    }
    /**
    * @param {number} comb
    * @returns {number | undefined}
    */
    angle_friction_factored(comb) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.soilmodel_angle_friction_factored(retptr, this.ptr, comb);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r2 = getFloat64Memory0()[retptr / 8 + 1];
            return r0 === 0 ? undefined : r2;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {number} comb
    * @returns {number | undefined}
    */
    undrained_shear_strength_factored(comb) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.soilmodel_undrained_shear_strength_factored(retptr, this.ptr, comb);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r2 = getFloat64Memory0()[retptr / 8 + 1];
            return r0 === 0 ? undefined : r2;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {number | undefined}
    */
    clay_strength_description() {
        const ret = wasm.soilmodel_clay_strength_description(this.ptr);
        return ret === 7 ? undefined : ret;
    }
}

async function load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

function getImports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
        const ret = getStringFromWasm0(arg0, arg1);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_alert_e8a51c677c896e81 = function(arg0, arg1) {
        alert(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };

    return imports;
}

function initMemory(imports, maybe_memory) {

}

function finalizeInit(instance, module) {
    wasm = instance.exports;
    init.__wbindgen_wasm_module = module;
    cachedFloat64Memory0 = new Float64Array();
    cachedInt32Memory0 = new Int32Array();
    cachedUint8Memory0 = new Uint8Array();


    return wasm;
}

function initSync(module) {
    const imports = getImports();

    initMemory(imports);

    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }

    const instance = new WebAssembly.Instance(module, imports);

    return finalizeInit(instance, module);
}

async function init(input) {
    if (typeof input === 'undefined') {
        input = new URL('rusty_ground_engineering_bg.wasm', import.meta.url);
    }
    const imports = getImports();

    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }

    initMemory(imports);

    const { instance, module } = await load(await input, imports);

    return finalizeInit(instance, module);
}

export { initSync }
export default init;
