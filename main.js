import './profile.js';
import fs from 'fs';

let v8Profiler = Npm.require('v8-profiler-node8'),
    { startProfile, stopProfile } = getProfiler(v8Profiler, fs),
    profileDuration = (profileName, exportPath, duration) => {
      startProfile(profileName, { exportPath });
      setTimeout(() => stopProfile(profileName), duration);
    }
;

export default {
  startProfile,
  stopProfile,
  profileDuration,
};
