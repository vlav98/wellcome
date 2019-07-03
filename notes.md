# CODE WELLCOME GUIDE

## INDEX

1. Changements faits
2. Ce qu'il faut faire
3. Les modèles de code

=======
## RAPPELS

- Ne jamais coder du style dans du HTML
- Préférer les tailles en % ou en vh/vw (viewHeight/viewWidth) sauf exception pour les images par exemple
- Les ID ne s'appellent qu'une seule fois alors que les CLASS s'appellent plusieurs fois

### 1. Main changements

- Retirement des styles à l'intérieur du fichier html
- Suppression des fichiers JS/FullPage
- Plus besoin de la page maintenance.html
- Le header est en z-index: 999, ce qui signifie qu'il sera au dessus de toute section et ne sera jamais en dessous d'un div

### 2. A faire

- Changer le CSS pour reprendre le modèle de Aya avec son site
- Aligner les éléments dans le header
- Mettre les bons logos et bien les classer dans des dossiers renommés

### 3. Codes à reprendre

- Pour ajouter une section :

    ```html
    <div class="section">
        <section>
            <h2>Des témoignages pour ouvrir ensemble de <br />
                nouvelles perspectives sur le handicap.</h2>
            <p>L'association Well'Come a pour but de valoriser l’humanité des personnes en situation de handicap.<br />
                Pour ce faire nous allons mettre en place une série de témoignage sous forme de podcast et de vidéo
                <br />
                pour raconter et décrypter leur quotidien au travail.</p>
        </section>
    </div>
    ```

- Pour rediriger automatiquement sur une nouvelle page :

    ```html
        <meta http-equiv="refresh" content="1; URL=maintenance.html" />
    ```
