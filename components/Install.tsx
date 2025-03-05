'use client'
import React, { forwardRef } from 'react'
import { usePwa } from '@dotmind/react-use-pwa'
import { useCallback } from 'react'
import { HiOutlineDownload } from 'react-icons/hi'

export default forwardRef<HTMLButtonElement>(
  function InstallButton(_, ref) {
    const { installPrompt, isInstalled, isStandalone, isOffline, canInstall } =
      usePwa()

    const handleInstallPrompt = useCallback(() => {
      if (canInstall) {
        installPrompt()
      }
    }, [canInstall, installPrompt])

    if (isOffline) return

    return (
      (!isInstalled || !isStandalone) &&
      canInstall && (
        <button
          ref={ref}
          type="button"
          name="Install"
          className="text-foreground cursor-pointer absolute bottom-8 right-8 p-4 border-2 rounded-full text-3xl border-border transition-all duration-150 hover:border-b-foreground"
          onClick={handleInstallPrompt}
        >
          <HiOutlineDownload
            className={'text-xl text-foreground transition-all duration-150'}
          />
        </button>
      )
    )
  },
)

