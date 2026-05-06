/**
 * Calm Music for Game
 * Generates soothing background music tracks
 */

namespace calmMusic {
    /**
     * Play relaxing background music
     * Uses gentle notes and slow tempo
     */
    export function playBackgroundMusic() {
        music.setTempo(80) // Slow, relaxing tempo

        // Gentle melody loop
        music.playTone(262, music.beat(BeatFraction.Half)) // C
        music.playTone(294, music.beat(BeatFraction.Half)) // D
        music.playTone(330, music.beat(BeatFraction.Whole)) // E
        music.playTone(349, music.beat(BeatFraction.Half)) // F
        music.playTone(294, music.beat(BeatFraction.Half)) // D
    }

    /**
     * Play calm ambient sounds
     * Soft, dreamy progression
     */
    export function playAmbience() {
        music.setTempo(60) // Very slow tempo

        // Ambient chord progression
        music.playTone(220, music.beat(BeatFraction.Whole)) // A
        pause(100)
        music.playTone(247, music.beat(BeatFraction.Whole)) // B
        pause(100)
        music.playTone(262, music.beat(BeatFraction.Whole)) // C
    }

    /**
     * Play a soothing melody loop
     * Perfect for menu or exploration
     */
    export function playSoothingMelody() {
        music.setTempo(90) // Gentle tempo

        // Soothing melody
        music.playTone(330, music.beat(BeatFraction.Half)) // E
        music.playTone(330, music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Quarter))
        music.playTone(349, music.beat(BeatFraction.Half)) // F
        music.playTone(330, music.beat(BeatFraction.Half)) // E
        music.playTone(294, music.beat(BeatFraction.Whole)) // D
    }

    /**
     * Play peaceful ending music
     * Calming conclusion
     */
    export function playPeacefulEnding() {
        music.setTempo(70) // Slow and peaceful

        // Descending peaceful notes
        music.playTone(349, music.beat(BeatFraction.Half)) // F
        music.playTone(330, music.beat(BeatFraction.Half)) // E
        music.playTone(294, music.beat(BeatFraction.Half)) // D
        music.playTone(262, music.beat(BeatFraction.Whole)) // C
        pause(200)
        music.playTone(262, music.beat(BeatFraction.Whole)) // C (final note)
    }

    /**
     * Stop all music playback
     */
    export function stopMusic() {
        music.stopAllSounds()
    }
}

