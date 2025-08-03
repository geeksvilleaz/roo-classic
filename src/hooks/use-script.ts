'use client';

import { useEffect, useState } from 'react';

function useScript(url: string, onLoad: () => void) {
  console.log('run once');

  const hasScript = Boolean(window.document.getElementById('godot-script'));
  console.log({ hasScript });

  useEffect(function () {
    var script = document.createElement('script');
    script.className = 'godot-script';
    script.src = url;
    script.async = true;
    script.onload = onLoad;
    document.body.appendChild(script);

    if (document.getElementsByClassName('godot-script').length > 1) {
      document.body.removeChild(
        document.getElementsByClassName('godot-script')[0],
      );
    }

    // return function () {
    //   document.body.removeChild(script);
    // };
  }, []);
}
export default useScript;
