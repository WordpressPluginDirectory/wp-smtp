<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitced42c9565167aa60a9bd5c6656f116c
{
    public static $prefixLengthsPsr4 = array (
        'l' => 
        array (
            'lucatume\\DI52\\' => 14,
        ),
        'W' => 
        array (
            'WPSMTP\\' => 7,
        ),
        'S' => 
        array (
            'StellarWP\\Validation\\' => 21,
            'StellarWP\\Telemetry\\Views_Dir\\' => 30,
            'StellarWP\\Telemetry\\Assets_Dir\\' => 31,
            'StellarWP\\Telemetry\\' => 20,
            'StellarWP\\FieldConditions\\' => 26,
            'StellarWP\\ContainerContract\\' => 28,
            'StellarWP\\Assets\\' => 17,
            'SolidWP\\' => 8,
        ),
        'P' => 
        array (
            'Psr\\Container\\' => 14,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'lucatume\\DI52\\' => 
        array (
            0 => __DIR__ . '/..' . '/lucatume/di52/src',
        ),
        'WPSMTP\\' => 
        array (
            0 => __DIR__ . '/../..' . '/inc',
        ),
        'StellarWP\\Validation\\' => 
        array (
            0 => __DIR__ . '/..' . '/stellarwp/validation/src',
        ),
        'StellarWP\\Telemetry\\Views_Dir\\' => 
        array (
            0 => __DIR__ . '/..' . '/stellarwp/telemetry/src/views',
        ),
        'StellarWP\\Telemetry\\Assets_Dir\\' => 
        array (
            0 => __DIR__ . '/..' . '/stellarwp/telemetry/src/resources',
        ),
        'StellarWP\\Telemetry\\' => 
        array (
            0 => __DIR__ . '/..' . '/stellarwp/telemetry/src/Telemetry',
        ),
        'StellarWP\\FieldConditions\\' => 
        array (
            0 => __DIR__ . '/..' . '/stellarwp/field-conditions/src',
        ),
        'StellarWP\\ContainerContract\\' => 
        array (
            0 => __DIR__ . '/..' . '/stellarwp/container-contract/src',
        ),
        'StellarWP\\Assets\\' => 
        array (
            0 => __DIR__ . '/..' . '/stellarwp/assets/src/Assets',
        ),
        'SolidWP\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
        'Psr\\Container\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/container/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitced42c9565167aa60a9bd5c6656f116c::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitced42c9565167aa60a9bd5c6656f116c::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitced42c9565167aa60a9bd5c6656f116c::$classMap;

        }, null, ClassLoader::class);
    }
}
